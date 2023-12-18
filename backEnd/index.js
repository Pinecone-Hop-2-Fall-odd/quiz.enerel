import express from "express";
import { userRouter } from "./src/routers/user-routes.js";
import { QuizRouter } from "./src/routers/quiz-routes.js";
import cors from "cors";
import mongoose from "mongoose";
// const { router } = require("./user");

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(QuizRouter);
const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://userNew:SainSaikhan89@cluster0.znt4atw.mongodb.net/"
  );
  console.log("database connected");
};

connectDb();
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});

// app.listen(8080, () => {
//   console.log(`Your server running on: http://localhost:8080`);
// });
