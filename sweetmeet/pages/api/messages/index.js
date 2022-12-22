import connectDB from "../../../config/db";

const messagesModel = require("../../../models/message");


async function messages(req, res) {
    if (req.method === "POST") {
        const newMessage = new messagesModel(req.body);
        try {
            const saveMessage = await newMessage.save();
            console.log('saveMessage:', saveMessage);
            res.status(200).send(saveMessage);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default connectDB(messages);
