const express = require("express")
const app = express()
const PORT = 8000
const URL = require("./models/url.model")
const urlRoute = require("./routes/url")
const { connectDB } = require("./connect.js")
connectDB("mongodb://localhost:27017/tiny-url").then(() => console.log("MongoDB connected"));

app.use(express.json())
app.use("/url", urlRoute)

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timeStamp: Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL)
})
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);

})


