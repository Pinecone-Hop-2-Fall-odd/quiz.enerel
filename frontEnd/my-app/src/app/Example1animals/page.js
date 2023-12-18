"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Quiz } from "@/app/Example1animals/components/Quiz";
import { Quiz21 } from "@/app/Example1animals/components/Quiz2";
import { Quiz211 } from "@/app/Example1animals/components/Quiz3";
import { Timer } from "./components/timer";

// het ih mur => component
// format => prettier
// het ih state => joohon nemj bodno
// ashiglahgui import uud ustgah

export default function Home() {
  const router = useRouter();
  const [checkTime, setCheckTime] = useState(false);
  const [checkAnswer1, setCheckAnswer1] = useState(false);
  const [checkAnswer2, setCheckAnswer2] = useState(false);
  const [checkAnswer3, setCheckAnswer3] = useState(false);
  const [answers, setAnswer] = useState(0);

  function onTimeRunout() {
    setCheckTime(!checkTime);
    alert("time done");
  }
  function CheckifCorrect() {
    setCheckTime(!checkTime);
    if (setCheckAnswer1 == true) {
      answers + 1;
    }
    if (setCheckAnswer2 == true) {
      answers + 1;
    }
    if (setCheckAnswer3 == true) {
      answers + 1;
    }
  }
  function GoBackToStart() {
    router.push("/quiz");
  }

  return (
    <div className="bg-[#00456b] w-screen h-screen p-[10px]  overflow-y-scroll">
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
          <Quiz checkAnswer1={checkAnswer1} setCheckAnswer1={setCheckAnswer1} />

          <Quiz21
            checkAnswer2={checkAnswer2}
            setCheckAnswer2={setCheckAnswer2}
          />
          <Quiz211
            checkAnswer2={checkAnswer3}
            setCheckAnswer2={setCheckAnswer3}
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

// if (1) => Quiz
// if (2) => Quiz21
// if (3) => Quiz211
