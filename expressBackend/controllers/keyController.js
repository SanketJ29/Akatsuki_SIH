const { Keys, HttpError, asyncErrorHandler } = require("../models/Model")


function generateRandomString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charsetLength = charset.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        result += charset.charAt(randomIndex);
    }

    return result;
}


const addKey = asyncErrorHandler(async (req, res, next) => {
    const { googleId } = req.body;
    const apiKey = generateRandomString(20);

    const callsLeft = 100
    const newKey = new Keys({
        googleId,
        apiKey,
        callsLeft
    })
    const result = await newKey.save();

    res.json({ apiKey });
})

const apiCalled = asyncErrorHandler(async (req, res, next) => {
    const { apiKey } = req.body;
    const key = await Keys.findOne({ apiKey })
    let message = "no calls left";
    if (!key.callsLeft == 0) {
        key.callsLeft = key.callsLeft - 1
        const result = await key.save();
        if (result) {
            message = "successful"
        }
    }
    res.json({ message });
})
exports.addKey = addKey;
exports.apiCalled = apiCalled
