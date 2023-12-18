"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { OneQuiz } from "./oneQuiz";
import { CorrectAnswers } from "./correctAnswer";
import { Timer } from "./components/timer";

export default function Quiz({ question, options }) {
  const [datas, setDatas] = useState([]);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(false);
  const [numberResults, setNumberResults] = useState(0);
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
  async function CheckAnswers() {
    setResult(!result);
  }
  console.log(datas);

  return (
    <div className="w-[1200px] h-[100%] bg-[white] rounded-[7px] flex flex-col justify-center items-center gap-[100px]">
      {result ? (
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <h4 className="text-[#4af14a]  text-[20px]">
              *Correct answers will be green!*
            </h4>
            <h3>Your score</h3>
            <p>
              {datas.length}/{numberResults}
            </p>
            <iframe
              src="https://giphy.com/embed/RlrcXMffVZaouUVPGD"
              width="200"
              height="200"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          {datas.map((data) => {
            return <CorrectAnswers data={data} />;
          })}
        </div>
      ) : checking ? (
        <div className="flex flex-col justify-center items-center gap-[50px] text-[black]">
          <Timer setResult={setResult} result={result} />
          {datas.map((data) => {
            return <OneQuiz data={data} setNumberResults={setNumberResults} />;
          })}

          <div className="flex flex-row gap-[5px] w-[160px] h-[45px] border-[2px] border-[black] rounded-[10px] justify-center items-center">
            <button onClick={() => CheckAnswers()}>
              Are you sure to sumbit?
            </button>
            <img className="w-[26px] h-[30px]" src="/areusure3.png" alt="..." />
          </div>
        </div>
      ) : (
        <div className="flex w-screen h-screen justify-center items-center">
          <img src="/meme.jpeg" className="w-[300px] h-[900px]" />
          <button
            onClick={() => CheckQuizes()}
            className="w-[150px] h-[50px] border-[2px] border-[black] rounded-[10px] ml-[-230px]"
          >
            Are you ready? Click to start.
          </button>
        </div>
      )}
    </div>
  );
}
