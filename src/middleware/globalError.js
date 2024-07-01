export const globalError = (err, req, res, next) => {
    let code = err.status||500
    res.status(code).json({message: err.message,stack:err.stack})
}