import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  answer: String,
  isCorrect: Boolean,
});

const quizSchema = new mongoose.Schema({
  // image: String,
  question: String,
  answers: [answerSchema],
  id: Number,
  category: String,
});

export const QuizModel1 = mongoose.model("quiz", quizSchema);
