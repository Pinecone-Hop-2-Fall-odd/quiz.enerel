import { useState } from "react";

export const OneQuiz = ({ data, setNumberResults }) => {
  const [activeDiv, setActiveDiv] = useState(null);

  function ChosenAnswer(index) {
    if (data.answers[index].isCorrect) {
      setNumberResults((prev) => (prev += 1));
    }
    setActiveDiv(index === activeDiv ? null : index);
  }
  return (
    <div className="flex justify-center items-center flex-col gap-[100px]">
      <div className="flex gap-[5px]">
        <h2>Question :</h2>
        <h1>{data.question}</h1>
      </div>
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
          <h3>{data.answers[0].answer}</h3>
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
          <h3>{data.answers[1].answer}</h3>
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
          <h3>{data.answers[2].answer}</h3>
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
          <h3>{data.answers[3].answer}</h3>
        </div>
      </div>
    </div>
  );
};
