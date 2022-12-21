import User from "../../models/user";
const jwt = require("jsonwebtoken");

export default async function login(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(403).send({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        age: user.age,
        hobbies: user.hobbies,
        languages: user.languages,
        food: user.food,
      },
      "sweetmeet",
      { expiresIn: "7 days" }
    );

    return res.send({ message: "login success", token });
  }
}
