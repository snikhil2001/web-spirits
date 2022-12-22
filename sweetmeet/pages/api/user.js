import connectDB from "../../config/db";
import User from "../../models/user";
const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(403).send({ message: "Provide token" });
  }

  let decoded = jwt.verify(token, "sweetmeet");

  let user = await User.find({ gender: decoded.gender });

  user = user.filter((el) => el._id != decoded._id);

  if (decoded) {
    user = user.filter((el) => {
      return (
        el.hobbies.includes(decoded.hobbies[0]) ||
        (el.hobbies.includes(decoded.hobbies[1]) &&
          el.languages === decoded.languages &&
          el.food === decoded.food)
      );
    });
  }
  return res.send({ user });
};

export default connectDB(handler);
