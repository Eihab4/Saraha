import Joi from 'joi'

export const sendMessageValidation = Joi.object({
    content: Joi.string().min(4).max(1000).required(),
    receiver: Joi.string().hex().length(24).required()
})

export const getMessagesValidation = Joi.object({
    receiver: Joi.string().hex().length(24).required()
})