import User from "../../models/user";
import connectDB from "../../config/db";

async function signup(req, res) {
  if (req.method === "POST") {
    const { name, email, age, hobbies, languages, password, food, gender } =
      req.body;

    const user = await User.findOne({ email });
    // console.log(user);

    if (user) {
      return res
        .status(403)
        .send({ message: "user already exists,please login" });
    }

    await User.create({
      name,
      age,
      hobbies,
      languages,
      email,
      password,
      food,
      gender,
    });

    return res.status(201).send({
      message: "user created successfully",
      name,
      age,
      email,
      hobbies,
      languages,
      food,
      gender,
    });
  }
  return res.send("hello");
}

export default connectDB(signup);
