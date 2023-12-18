import express from "express";
import mongoose from "mongoose";

import {
  createUser,
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
  getUserName,
} from "../controllers/user-controller.js";
import { login } from "../controllers/login-controller.js";

export const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/user/:id", getUser);
userRouter.get("/username/:username", getUserName);
userRouter.put("/users/:id", editUser);
userRouter.delete("/users/:id", deleteUser);
userRouter.post("/login", login);
userRouter.post("/users", createUser);
userRouter.get("/user", getAllUsers);
