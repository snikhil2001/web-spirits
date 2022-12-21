const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number, required: true },
  hobbies: { type: Array, required: true },
  languages: { type: String, required: true },
  food: { type: String, required: true },
  password: { type: String, required: true },
});

mongoose.models = {};

const User = mongoose.model("user", userSchema);

export default User;
