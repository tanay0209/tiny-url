const shortid = require('shortid');
const URL = require('../models/url.model.js');
async function generateNewShortUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            error: "URL is required"
        })
    }
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: []
    })
    return res.status(201).json({
        id: shortId
    })
}

async function getUrlDetails(req, res) {
    const shortId = req.params.shortId;
    const url = await URL.findOne({ shortId });
    return res.json({
        totalClicks: url.visitHistory.length,
        analytics: url.visitHistory
    })
}

module.exports = {
    generateNewShortUrl,
    getUrlDetails
}