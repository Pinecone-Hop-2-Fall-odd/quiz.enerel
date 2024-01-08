"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Quiz } from "@/app/ExampleQuiz/components/Quiz";
import { Quiz21 } from "@/app/ExampleQuiz/components/Quiz2";
import { Quiz211 } from "@/app/ExampleQuiz/components/Quiz3";
import { Timer } from "./components/timer";

export default function Home() {
  const router = useRouter();
  const [checkTime, setCheckTime] = useState(false);
  const [answers, setAnswer] = useState(0);

  function onTimeRunout() {
    setCheckTime(!checkTime);
    alert("time done");
  }
  function CheckifCorrect() {
    setCheckTime(!checkTime);
  }
  function GoBackToStart() {
    router.push("/quiz");
  }

  return (
    <div className="bg-[#0f4589] w-screen h-screen p-[10px]  overflow-y-scroll">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="w-screen flex justify-between items-center">
          <img
            onClick={() => GoBackToStart()}
            src="menu.png"
            className="w-[30px] h-[30px]"
          />
          <div className="flex justify-center items-center gap-[10px]">
            <Timer onTimeRunout={onTimeRunout} />

            <h1 className="text-white text-[30px]">
              Guess The Fruits/Fruit Facts!
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] justify-center items-center">
          <div className="text-white flex gap-[10px]">
            <h2>{answers}</h2>
            <h2>/</h2>
            <h2>3</h2>
          </div>
          <Quiz
            CheckifCorrect={CheckifCorrect}
            answers={answers}
            setAnswer={setAnswer}
          />
          <Quiz21
            CheckifCorrect={CheckifCorrect}
            answers={answers}
            setAnswer={setAnswer}
          />
          <Quiz211
            CheckifCorrect={CheckifCorrect}
            answers={answers}
            setAnswer={setAnswer}
          />
          <button
            onClick={() => CheckifCorrect()}
            className="text-[#aeaeae] border-[2px] bg-[white] border-[white] w-[200px] rounded-[10px]"
          >
            Sumbit
          </button>
        </div>
      </div>
    </div>
  );
}
