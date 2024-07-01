import appError from "../utils/appError.js";


export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate({ ...req.body,...req.params },{abortEarly: false});
        if (!error) {
            next()
        }
        else {
            const errorMessagesArray = error.details.map(err => err.message)
            next(new appError(errorMessagesArray,401))
        }
    }
}