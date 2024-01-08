import mongoose from "mongoose";

const answers = new mongoose.Schema({
  answerA: String,
  answerB: String,
  answerC: String,
  answerD: String,
});

const exampleQuiz = new mongoose.Schema({
  question: String,
  answer: answers,
});
const inputAnswer = new mongoose.Schema({
  answer: String,
  question: String,
});
const TorF = new mongoose.Schema({
  answer: Boolean,
  question: String,
});
const exampleSchema = new mongoose.Schema({
  answerQuiz: exampleQuiz,
  inputQuiz: inputAnswer,
  TrueOrFalse: TorF,
});
export const exampleQuiz1 = mongoose.model("example", exampleSchema);
