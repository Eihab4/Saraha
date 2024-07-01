import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../../../DataBase/models/user.models.js";
import { generateOtp, otpExpiry } from "../../utils/generateOtp.js";
import { catchError } from "../../middleware/catchError.js";
import appError from "../../utils/appError.js";
import { sendEmail } from "../../emails/email.js";


export const signUp = catchError(async (req, res) => {
    const { userName, email, password } = req.body;
    const otp = generateOtp();
    const otpExpiryTime = otpExpiry();
    const newUser = await User.insertMany([{ userName, email, password, otp, otpExpiry: otpExpiryTime }]);
    newUser[0].password = undefined; 
    sendEmail(email, otp);
    return res.status(201).json({ message: "User created successfully" });
});


export const signIn = catchError(async (req, res,next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        next(new appError("Invalid email or password!", 400))
    }
    jwt.sign({ email: user.email, _id: user._id }, "sarahaAppPasswordToken", (err, token) => {
        if (err) {
            next(new appError("Failed to generate token",500))
        }
        return res.status(200).json({
            message: "Login successful!",
            token: token,
        });
    });
})

export const verifyEmail = catchError(async (req, res, next) => {
    const { otp } = req.body;
    const user = await User.findOne({ otp });

    if (user && user.otpExpiry > Date.now()) {
        await User.updateOne({ otp }, { $unset: { otp: "", otpExpiry: "" } });
        return res.status(200).json({ message: "OTP verified. Registration complete." });
    }

    next(new appError("Invalid or expired OTP.", 400));
});