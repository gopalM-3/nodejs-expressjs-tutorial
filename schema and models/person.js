const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    water: {
        type: Boolean
    }
}, { timestamps: true })

module.exports = mongoose.model("Person", personSchema)