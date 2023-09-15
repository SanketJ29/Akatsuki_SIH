const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keysSchema = new Schema({
    googleId: { type: String, required: true },
    callsLeft: { type: Number, required: true },
    apiKey: { type: String, required: true }
})
const Keys = mongoose.model('Keys', keysSchema)

class HttpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
}

const asyncErrorHandler = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(err => next(err));
    }
}

exports.Keys = Keys
exports.HttpError = HttpError
exports.asyncErrorHandler = asyncErrorHandler
