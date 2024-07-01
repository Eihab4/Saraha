import { User } from "../../DataBase/models/user.models.js";
import bcrypt from "bcrypt";
import appError from "../utils/appError.js";

export const checkEmail = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        next(new appError("Email already exists!",400))
    }
    req.body.password = bcrypt.hashSync(password, 8);
    next();
};
