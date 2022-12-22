import connectDB from "../../../config/db";
const conModel = require("../../../models/conversation");

async function conversation(req, res) {
    if (req.method === "POST") {
        const { senderId, receiverId } = req.body;
        // console.log('receiverId:', receiverId)
        // console.log('senderId:', senderId)

        try {
            const exisiting = await conModel.findOne({ members: [senderId, receiverId] })
            console.log('exisiting:', exisiting)
            if (exisiting) {
                return res.status(200).send(exisiting);
            }
            const conversation = await conModel.create({
                members: [senderId, receiverId]
            });
            // console.log('conversation:', conversation);
            res.status(200).send(conversation);
        } catch (error) {
            console.log('error:', error.message)
            res.status(500).send(error);
        }
    } else {
        res.send("hello")
    }
}

export default connectDB(conversation);





// conversationRouter.get("/", async (req, res) => {
//     const conversation = await conModel.find({});
//     res.send(conversation)
// })

// conversationRouter.post("/", async (req, res) => {

// })


// conversationRouter.get("/:userId", async (req, res) => {

//     try {
//         const conversation = await conModel.find({
//             members: { $in: [req.params.userId] }
//         });
//         console.log('conversation:', conversation);
//         res.status(200).send(conversation);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })



// module.exports = conversationRouter;