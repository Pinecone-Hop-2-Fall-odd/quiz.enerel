import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { questions } from "@/app/JSONs/statics";

export function Quiz21({ setCheckAnswers2 }) {
  // const [correct, setCorrect] = useState(false);
  // const [value, setValue] = useState("");

  // for (let i = 0; i < answers.lenght; i++) {
  // let rightanswer1 = answers[0].answers[1].answer.toLowerCase();
  // let rightanswer2 = answers[0].answers[0].answer.toLowerCase();
  // let input = value.toLowerCase();
  //   if (inputanswer == rightanswer1) {
  //     setCheckAnswers2(!checkAnswers2);
  //   }
  // }
  const onChange = (e) => {
    const question = questions[1];

    const isCorrect = questions[1].answers.filter((cur) => {
      if (cur.answer === e.target.value) {
        return cur.isCorrect;
      }
      return false;
    });

    // if ( === 1) {
    setCheckAnswers2(isCorrect.length === 1);
    // }

    // console.log(answers[0].answers);
    // if (input == rightanswer1) {
    //   if (answers[0].answers[0].isCorrect == true) {
    //     alert("ok");
    //   }
    // } else if (input == rightanswer2) {
    //   if (answers[0].answers[1].isCorrect == true) {
    //     alert("ok");
    //   }
    // }
    // if (onChange == answers) {
    // }
    // e.target.value;
    // setCheckAnswers2();
  };

  return (
    <div className="w-[1200px] h-[850px] bg-[white] rounded-[7px] flex flex-col justify-center items-center gap-[100px]">
      <h1>{questions[1].question}</h1>
      <img className="w-[700px] h-[500px]" src="angora.jpeg" />
      <input
        className="border-[black] border-[2px] w-[500px] h-[50px] rounded-[10px] p-[10px] outline-none"
        onChange={onChange}
        placeholder="Guess the image.."
        // value={value}
      />
    </div>
  );
}

// [{ "answer": "angora" }, { "a": "a" }]
