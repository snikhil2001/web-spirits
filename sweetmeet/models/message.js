const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
    //contain user id
    conversationId: String,
    sender: String,
    text: String,

}, { timestamps: true })

mongoose.models = {};

const messagesModel = mongoose.model("message", messagesSchema);

module.exports = messagesModel