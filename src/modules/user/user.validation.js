import Joi from 'joi';

export const signUpValidation = Joi.object({
    userName: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[A-Z][A-Za-z0-9]{8,40}$')).required(),
    rePassword: Joi.ref('password'),
    otp: Joi.string()
})

export const signInValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[A-Z][A-Za-z0-9]{8,40}$')).required(),
})

export const verifyEmailValidation = Joi.object({
    otp: Joi.string().length(6).required(),
});