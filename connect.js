const mongoose = require('mongoose');

async function connectDB(url) {
    try {
        await mongoose.connect(url)
    } catch (error) {
        console.log("Error connecting to DB", error);
        process.exit(1);
    }
}

module.exports = {
    connectDB
};