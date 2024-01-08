import { useState } from "react";

export const CorrectAnswers = ({ data }) => {
  const [activeDiv, setActiveDiv] = useState(null);

  function ChosenAnswer(index) {
    setActiveDiv(index === activeDiv ? null : index);
  }
  console.log(data);
  return (
    <div className="flex justify-center items-center flex-col gap-[100px] border-[4px] bg-[white] border-[#69b4ff] rounded-[10px] p-[10px]">
      <div className="flex gap-[5px] text-[#69b4ff]">
        <h2>Question :</h2>
        <h1>{data.question}</h1>
      </div>
      <div className="flex flex-wrap gap-[20px] justify-center align-center">
        <div
          onClick={() => ChosenAnswer(0)}
          className={`w-[300px] border-2 ${
            data.answers[0].isCorrect == false
              ? "border-[#69b4ff]  text-[#69b4ff]"
              : "border-[#4af14a]  text-[#4af14a]"
          } rounded-[10px] h-[30px] flex justify-start items-center gap-[10px] p-[5px]`}
        >
          <h2 className="">a.</h2>
          <h3>{data.answers[0].answer}</h3>
        </div>
        <div
          onClick={() => ChosenAnswer(1)}
          className={`w-[300px] border-2 ${
            data.answers[1].isCorrect == false
              ? "border-[#69b4ff]  text-[#69b4ff]"
              : "border-[#4af14a]  text-[#4af14a]"
          } rounded-[10px] h-[30px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px]`}
        >
          <h2 className="">b.</h2>
          <h3>{data.answers[1].answer}</h3>
        </div>
        <div
          onClick={() => ChosenAnswer(2)}
          className={`w-[300px] border-2 ${
            data.answers[2].isCorrect == false
              ? "border-[#69b4ff]  text-[#69b4ff]"
              : "border-[#4af14a]  text-[#4af14a]"
          } rounded-[10px] h-[30px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px]`}
        >
          <h2 className="">c.</h2>
          <h3>{data.answers[2].answer}</h3>
        </div>
        <div
          onClick={() => ChosenAnswer(3)}
          className={`w-[300px] border-2 ${
            data.answers[3].isCorrect == false
              ? "border-[#69b4ff]  text-[#69b4ff]"
              : "border-[#4af14a]  text-[#4af14a]"
          } rounded-[10px] h-[30px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px]`}
        >
          <h2 className="">d.</h2>
          <h3>{data.answers[3].answer}</h3>
        </div>
      </div>
    </div>
  );
};
