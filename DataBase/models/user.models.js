import { Schema, Types, model } from "mongoose";



const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    otp: { type: String },
    otpExpiry: { type: Date }
});


export const User = model("User", userSchema);

