import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
  createdOn: Date,
  id: String,
  work: String,
  password: String,
});

export const UserModel = mongoose.model("user", userSchema);
