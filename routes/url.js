const express = require('express');
const { generateNewShortUrl, getUrlDetails } = require('../controllers/url')

const router = express.Router()

router.post("/", generateNewShortUrl)
router.get("/analytics/:shortId", getUrlDetails)

module.exports = router;