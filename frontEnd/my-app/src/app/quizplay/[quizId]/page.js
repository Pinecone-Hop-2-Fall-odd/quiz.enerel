"use client";

import { useState } from "react";
import axios from "axios";
import { OneQuiz } from "./oneQuiz";
import { CorrectAnswers } from "./correctAnswer";
import { Timer } from "./components/timer";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const [datas, setDatas] = useState([]);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(false);
  const [numberResults, setNumberResults] = useState(0);
  const [questionId, setQuestionId] = useState(0);
  const [activeDiv, setActiveDiv] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const router = useRouter();
  console.log("numberResults", numberResults);
  async function CheckQuizes() {
    const res = await axios.get(`http://localhost:8080/quiz1`);
    if (res.status == 200) {
      setDatas(res.data.quiz_data);
      setChecking(!checking);
    } else {
      alert("error 504");
    }
  }
  function GoToNextQuiz() {
    if (correctAnswer == true) {
      setNumberResults((prev) => prev + 1);
    }
    setActiveDiv(null);
    setQuestionId((prev) => prev + 1);
    if (questionId == datas.length - 1) {
      setResult(!result);
    }
  }
  function ReturnToMain() {
    router.push("/quiz");
  }
  function PlayAgain() {
    router.push("/quizplay/[id]");
  }
  console.log(datas);
  function ChosenAnswer(isCorrect, index) {
    setCorrectAnswer(isCorrect);
    if (index === activeDiv) {
      setActiveDiv(null);
    } else {
      setActiveDiv(index);
    }
  }
  return (
    <div className=" bg-[#0f4589] flex flex-col justify-center items-center gap-[100px]">
      {result ? (
        <div className="flex flex-col justify-center items-center gap-[30px] h-[]">
          <h4 className="text-[#4af14a]  text-[20px]">
            *Correct answers will be green!*
          </h4>
          <div className="flex flex-row gap-[5px]">
            <h3 className="text-[#69b4ff]">Your score:</h3>
            <p className="text-[#69b4ff]">
              {datas.length}/{numberResults}
            </p>
          </div>
          {datas.map((data) => {
            return <CorrectAnswers data={data} />;
          })}
          <div className="flex gap-[20px] flex-col justify-center items-center mt-[60px]">
            <div className="flex flex-row gap-[10px]">
              <button className="border-[4px] bg-[white] border-[#69b4ff] rounded-[10px] text-[#69b4ff] p-[3px]">
                Save Results.
              </button>
              <button
                onClick={() => ReturnToMain()}
                className="border-[4px] bg-[white] border-[#69b4ff] rounded-[10px] text-[#69b4ff] p-[3px]"
              >
                Return to the main page
              </button>
              <button
                onClick={() => PlayAgain()}
                className="border-[4px] bg-[white] border-[#69b4ff] rounded-[10px] text-[#69b4ff] p-[3px]"
              >
                Re-Do
              </button>
            </div>
          </div>
        </div>
      ) : checking ? (
        <div className="flex flex-col justify-center items-center gap-[50px] text-[black]">
          <Timer setResult={setResult} result={result} />
          <p className="text-[#69b4ff]">
            {questionId + 1}/{datas.length}
          </p>
          <OneQuiz
            activeDiv={activeDiv}
            datas={datas}
            setNumberResults={setNumberResults}
            questionId={questionId}
            setActiveDiv={setActiveDiv}
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
            ChosenAnswer={ChosenAnswer}
          />

          <div className="flex flex-row gap-[5px] w-[160px] h-[45px] border-[2px] border-[#69b4ff] rounded-[10px] justify-center items-center text-[#69b4ff] bg-[white] mt-[117px]">
            <button onClick={() => GoToNextQuiz()}>Next Quiz</button>
          </div>
        </div>
      ) : (
        <div className="flex w-screen h-screen justify-center items-center">
          <div className="w-[300px] h-screen bg-[white] flex justify-center items-center"></div>
          <div className="w-screen h-[300px] bg-[white] flex justify-center items-center">
            <button
              onClick={() => CheckQuizes()}
              className="w-[150px] h-[50px] border-[2px] border-[#0f4589] rounded-[10px] text-[#0f4589]"
            >
              Are you ready? Click to start.
            </button>
          </div>
          <div className="w-[300px] h-screen bg-[white] flex justify-center items-center"></div>
        </div>
      )}
    </div>
  );
}
