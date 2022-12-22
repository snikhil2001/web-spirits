import connectDB from "../../../config/db"
const conModel = require("../../../models/conversation");

const ConId = async (req, res) => {
    const { id } = req.query
    console.log('id:', id)
    try {
        const conversation = await conModel.find({
            members: { $in: [id] }
        });
        console.log('conversation:', conversation);
        res.status(200).send(conversation);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default connectDB(ConId);