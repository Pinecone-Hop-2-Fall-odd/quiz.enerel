"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [quiz, setQuiz] = useState(false);
  const [datas, setDatas] = useState([]);

  function GoBackToStart() {
    router.push("/");
  }
  function Example1() {
    router.push("/ExampleQuiz");
  }
  function CreateQuiz() {
    router.push("/quizCreate");
  }

  async function CheckQuizes() {
    const res = await axios.get(`http://localhost:8080/quiz1`);
    if (res.status == 200) {
      setQuiz(!quiz);
      setDatas(res.data);
    }
    console.log(res.data);
  }
  function PlayAQuiz(quizOrder) {
    console.log(datas.quiz_data[quizOrder].id);
    router.push(`/quizplay/${datas.quiz_data[quizOrder].id}`);
  }
  function Suprise() {
    router.push("/suprise");
  }
  console.log("datas", datas);
  return (
    <div className=" bg-[#0f4589] w-screen h-screen p-[10px]">
      <img
        onClick={() => GoBackToStart()}
        src="home.png"
        className="w-[30px] h-[30px]"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center h-[300px] gap-[10px] flex-col">
          <div className="flex justify-center items-center gap-[10px]">
            <h1 className="text-[#69b4ff] text-[33px] font-medium">
              Hello quizers! Welcome to Blake..
            </h1>
          </div>
          <div className="flex justify-center items-center gap-[10px]">
            <h2 className="text-[#69b4ff] text-[20px]">
              So what are we doing today?
            </h2>
          </div>
        </div>
        <div className="bg-[#5598ec] rounded-[8px] p-[10px] h-[600px] w-[1100px] flex">
          <div className="h-[100%] w-[350px]  flex flex-col items-center  border-[1px] rounded-[5px] bg-[white]">
            <h1 className="text-[#69b4ff] text-[20px]">Example Quiz!</h1>
            <div className=" mt-[20px] overflow-y-scroll gap-[20px] flex flex-col ">
              <div
                onClick={() => Example1()}
                className="flex flex-col justify-center items-center gap-[10px]"
              >
                <div className="flex flex-col justify-center items-center text-[#69b4ff]">
                  <h3>Catergory of the quiz:</h3>
                  <h3>Orange fruit facts</h3>
                </div>
                <img
                  src="fruits12.jpeg"
                  className=" border-[3px] rounded-[7px] border-[#69b4ff]"
                />
                <h3 className="text-[#69b4ff]">
                  Click on the image to play the quiz
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[740px] text-[#69b4ff] gap-[20px] ml-[10px] border-[1px] rounded-[10px] bg-[white]">
            <h1 className="text-[20px]">Your quizes!</h1>
            <div className="flex flex-col items-center gap-[30px]">
              <div className="hover:animate-pulse w-[130px] h-[100px]">
                <button
                  onClick={() => CreateQuiz()}
                  className="border-[2px] border-[#69b4ff] h-[60px] w-[130px] rounded-[7px]"
                >
                  Create a new quiz!
                </button>
              </div>
              <button
                onClick={() => CheckQuizes()}
                className="border-[2px] w-[150px] h-[60px] border-[#69b4ff] rounded-[10px]"
              >
                Check my quiz.
              </button>
              {quiz ? (
                <div className="flex flex-col border-[4px] border-dotted w-[300px] h-[100px] justify-center items-center border-[#69b4ff] gap-[20px] rounded-[10px]">
                  <div className="flex gap-[10px]">
                    <h2>Category of the quiz :</h2>
                    <h3>{datas.quiz_data[0].category}</h3>
                  </div>
                  <button
                    onClick={() => PlayAQuiz(0)}
                    className="border-[2px] border-[#69b4ff] w-[100px] rounded-[10px]"
                  >
                    Play!
                  </button>
                </div>
              ) : (
                <h3 className="animate-spin">:3</h3>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2
          onClick={() => Suprise()}
          className="text-[10px] text-[#0f4589] mt-[10px] animate-bounce"
        >
          secret
        </h2>
      </div>
    </div>
  );
}
