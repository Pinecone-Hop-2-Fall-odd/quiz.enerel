import express from "express";
import mongoose from "mongoose";

import { question } from "../controllers/quiz-controller.js";
import { data } from "../controllers/quiz-controller.js";
import { quizpointer } from "../controllers/quiz-controller.js";

export const QuizRouter = express.Router();

QuizRouter.post("/quiz1", question);
QuizRouter.get("/quiz1", data);
QuizRouter.get(`/quizplay/:id`, quizpointer);
