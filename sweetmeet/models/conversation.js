const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    //contain user id
    members: {
        type: Array,
    }
}, { timestamps: true })

mongoose.models = {};

const conModel = mongoose.model("conversation", conversationSchema);

module.exports = conModel;
