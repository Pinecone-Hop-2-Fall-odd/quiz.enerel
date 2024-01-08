import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { questions } from "@/app/JSONs/statics";

export function Quiz21({ setCheckAnswers2 }) {
  const onChange = (e) => {
    const question = questions[1];

    const isCorrect = questions[1].answers.filter((cur) => {
      if (cur.answer === e.target.value) {
        return cur.isCorrect;
      }
      return false;
    });

    setCheckAnswers2(isCorrect.length === 1);
  };

  return (
    <div className="w-[1200px] h-[850px] bg-[white] rounded-[7px] flex flex-col justify-center items-center gap-[100px]">
      <h1>{questions[1].question}</h1>
      <img className="w-[700px] h-[500px]" src="eggfruit.jpeg" />
      <input
        className="border-[black] border-[2px] w-[500px] h-[50px] rounded-[10px] p-[10px] outline-none"
        onChange={onChange}
        placeholder="Guess the image.."
      />
    </div>
  );
}
