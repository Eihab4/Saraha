import jwt from "jsonwebtoken";
import appError from "../utils/appError.js";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log("Token not provided or invalid format!");
        return next(new appError("Unauthorized", 401));
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, "sarahaAppPasswordToken", (err, decoded) => {
        if (err) {
            console.log("Token verification failed:", err.message);
            return next(new appError("Invalid token", 401));
        }
        req.user = decoded;
        next();
    });
};