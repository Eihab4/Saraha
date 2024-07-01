import { Router } from "express";
import { signIn, signUp, verifyEmail } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
import { validate } from "../../middleware/validate.js";
import { signInValidation, signUpValidation, verifyEmailValidation } from "./user.validation.js";



export const userRouter = Router();

userRouter.post("/signUp",validate(signUpValidation),checkEmail, signUp)
userRouter.post("/signIn", validate(signInValidation),signIn)
userRouter.put("/verifyEmail", validate(verifyEmailValidation), verifyEmail)


