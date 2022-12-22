import connectDB from "../../../config/db"
const messagesModel = require("../../../models/message");

const MesId = async (req, res) => {
    const { id } = req.query;
    try {
        const message = await messagesModel.find({
            conversationId: id
        });
        console.log('message:', message);
        res.status(200).send(message);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default connectDB(MesId);