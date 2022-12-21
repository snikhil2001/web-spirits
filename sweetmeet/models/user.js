const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: String, required: true },
  hobbies: { type: Array, required: true },
  languages: { type: Array, required: true },
  password: { type: String, required: true },
});

mongoose.models = {};

const User = mongoose.model("user", userSchema);

module.exports = User;
