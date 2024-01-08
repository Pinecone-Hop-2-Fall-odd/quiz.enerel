import { useState, useEffect } from "react";
import { questions } from "@/app/JSONs/statics";

export function Quiz211({ CheckifCorrect, answers, SetAnswer }) {
  const [activeDiv, setActiveDiv] = useState(null);

  function ChosenAnswer(index) {
    setActiveDiv(index === activeDiv ? null : index);
  }

  useEffect(() => {
    if (activeDiv == 0) {
      setCheckAnswers3(!checkAnswers3);
    }
  }, []);
  function temp() {
    console.log();
    CheckifCorrect();
  }

  return (
    <div className="w-[1200px] h-[850px] bg-[white] rounded-[7px] flex flex-col justify-center items-center gap-[100px]">
      <h1 className="text-[40px]">{questions[2].question}</h1>
      <div className="flex gap-[100px]">
        <button
          onClick={() => ChosenAnswer(0)}
          className={`w-[300px] border-2 ${
            activeDiv !== 0
              ? "border-[black]  text-[black]"
              : "border-[#60a0c3]  text-[#60a0c3]"
          } rounded-[10px] h-[30px]`}
        >
          True
        </button>
        <button
          onClick={() => ChosenAnswer(1)}
          className={`w-[300px] border-2 ${
            activeDiv !== 1
              ? "border-[black]  text-[black]"
              : "border-[#60a0c3]  text-[#60a0c3]"
          } rounded-[10px] h-[30px]`}
        >
          False
        </button>
      </div>
    </div>
  );
}
