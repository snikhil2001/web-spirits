import connectDB from "../../config/db";
import User from "../../models/user";

const handler = async (req, res) => {
  const user = await User.find();
  return res.send(user);
};

export default connectDB(handler);
