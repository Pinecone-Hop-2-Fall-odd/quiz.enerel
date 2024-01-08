export const OneQuiz = ({ datas, questionId, activeDiv, ChosenAnswer }) => {
  return (
    <div className=" w-[1000px] h-[700px] flex justify-center items-center flex-col gap-[200px] border-[4px] bg-[white] border-[#69b4ff] rounded-[10px] p-[10px]">
      <div className="flex gap-[10px] text-[#69b4ff] text-[70px] flex-col justify-center items-center">
        <h2>Question: </h2>
        <h1>{datas[questionId]?.question}</h1>
      </div>
      <div className="flex flex-wrap gap-[20px] justify-center align-center">
        <div
          onClick={() =>
            ChosenAnswer(datas[questionId]?.answers[0].isCorrect, 0)
          }
          className={`w-[300px] border-2 ${
            activeDiv !== 0
              ? "border-[#69b4ff]  text-[#69b4ff]"
              : "border-[#282ab0]  text-[#282ab0]"
          } rounded-[10px] h-[40px] flex justify-start items-center gap-[10px] p-[5px] cursor-pointer `}
        >
          <h2 className="">a.</h2>
          <h3>{datas[questionId]?.answers[0].answer}</h3>
        </div>
        <div
          onClick={() =>
            ChosenAnswer(datas[questionId]?.answers[1].isCorrect, 1)
          }
          className={`w-[300px] border-2 ${
            activeDiv !== 1
              ? "border-[#69b4ff]  text-[#69b4ff]"
              : "border-[#282ab0]  text-[#282ab0]"
          } rounded-[10px] h-[40px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px] cursor-pointer`}
        >
          <h2 className="">b.</h2>
          <h3>{datas[questionId]?.answers[1].answer}</h3>
        </div>
        <div
          onClick={() =>
            ChosenAnswer(datas[questionId]?.answers[2].isCorrect, 2)
          }
          className={`w-[300px] border-2 ${
            activeDiv !== 2
              ? "border-[#69b4ff]  text-[#69b4ff]"
              : "border-[#282ab0]  text-[#282ab0]"
          } rounded-[10px] h-[40px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px] cursor-pointer`}
        >
          <h2 className="">c.</h2>
          <h3>{datas[questionId]?.answers[2].answer}</h3>
        </div>
        <div
          onClick={() =>
            ChosenAnswer(datas[questionId]?.answers[3].isCorrect, 3)
          }
          className={`w-[300px] border-2 ${
            activeDiv !== 3
              ? "border-[#69b4ff]  text-[#69b4ff]"
              : "border-[#282ab0]  text-[#282ab0]"
          } rounded-[10px] h-[40px] text-[#00456b] flex justify-start items-center gap-[10px] p-[5px] cursor-pointer`}
        >
          <h2 className="">d.</h2>
          <h3>{datas[questionId]?.answers[3].answer}</h3>
        </div>
      </div>
    </div>
  );
};
