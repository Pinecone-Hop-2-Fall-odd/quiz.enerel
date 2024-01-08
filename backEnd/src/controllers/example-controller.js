import { exampleQuiz1 } from "../../models/example.js";

export const question = async (req, res) => {
  const body = req.body;

  await QuizModel1.create({
    question: body.question,
    answers: body.answer,
  });
  res.status(200).json({ quiz: body });
};
export const data = async (req, res) => {
  const quiz_data = await QuizModel1.find({});
  res.status(200).json({ quiz_data });
};
export const quizpointer = async (req, res) => {
  const { id } = req.params;
  const quiz_pointer = await QuizModel1.findOne({ id: id });
  console.log(quiz_pointer);
  res.status(200).json({ quiz_pointer });
};
