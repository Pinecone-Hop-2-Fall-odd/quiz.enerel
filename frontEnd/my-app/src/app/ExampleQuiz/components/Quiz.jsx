import { useState, useEffect } from "react";
import { questions } from "@/app/JSONs/statics";

export function Quiz({ question, options }) {
  const [activeDiv, setActiveDiv] = useState(null);

  function ChosenAnswer(index) {
    setActiveDiv(index === activeDiv ? null : index);
    console.log(questions);
  }

  return (
    <div className="w-[1200px] h-[850px] bg-[white] rounded-[7px] flex flex-col justify-center items-center gap-[100px]">
      <h1>{questions[0].question}</h1>
      <img
        src="asianpears.jpeg"
        className="w-[700px] border-2 border-[#00456b] rounded-[10px]"
      />
      <div className="flex flex-wrap gap-[20px] justify-center align-center">
        <div
          onClick={() => ChosenAnswer(0)}
          className={`w-[300px] border-2 ${
            activeDiv !== 0
              ? "border-[#00456b]  text-[#00456b]"
              : "border-[#60a0c3]  text-[#60a0c3]"
          } rounded-[10px] h-[30px] flex justify-start items-center gap-[10px] p-[5px]`}
        >
          <h2 className="">a.</h2>
          <h3>{questions[0].answers[0].answer}</h3>
        </div>
        <div
          onClick={() => ChosenAnswer(1)}
          className={`w-[300px] border-2 ${
            activeDiv !== 1
              ? "border-[#00456b]  text-[#00456b]"
              : "border-[#60a0c3]  text-[#60a0c3]"
          } rounded-[10px] h-[30px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px]`}
        >
          <h2 className="">b.</h2>
          <h3>{questions[0].answers[1].answer}</h3>
        </div>
        <div
          onClick={() => ChosenAnswer(2)}
          className={`w-[300px] border-2 ${
            activeDiv !== 2
              ? "border-[#00456b]  text-[#00456b]"
              : "border-[#60a0c3]  text-[#60a0c3]"
          } rounded-[10px] h-[30px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px]`}
        >
          <h2 className="">c.</h2>
          <h3>{questions[0].answers[2].answer}</h3>
        </div>
        <div
          onClick={() => ChosenAnswer(3)}
          className={`w-[300px] border-2 ${
            activeDiv !== 3
              ? "border-[#00456b]  text-[#00456b]"
              : "border-[#60a0c3]  text-[#60a0c3]"
          } rounded-[10px] h-[30px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px]`}
        >
          <h2 className="">d.</h2>
          <h3>{questions[0].answers[3].answer}</h3>
        </div>
      </div>
    </div>
  );
}
