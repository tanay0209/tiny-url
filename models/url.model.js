const mongose = require('mongoose');


const urlSchema = new mongose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{ timeStamp: Number }]
}, { timestamps: true })

const URL = mongose.model('url', urlSchema);
module.exports = URL;