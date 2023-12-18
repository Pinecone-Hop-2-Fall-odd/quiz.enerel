"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const routers = useRouter();
  let Limit = 0;
  function Switch() {
    setAccepted(!accepted);
  }
  function Template1() {
    Limit + 1;
    routers.push("/quiz1");
  }
  function Template2() {
    Limit + 1;
  }
  function Template3() {
    Limit + 1;
  }
  return (
    <div>
      {accepted ? (
        <div className="flex flex-col justify-center items-center w-screen h-screen gap-[20px]">
          <div className="flex flex-row gap-[3px]">
            <h3>{Limit}</h3>
            <h3>/10 "limit"</h3>
          </div>
          <div className="flex items-center  justify-center flex-wrap gap-[40px] p-[20px]">
            <div
              onClick={() => Template1()}
              className="flex flex-col gap-[10px] justify-center items-center"
            >
              <h2>Option Quiz</h2>
              <img className="w-[400px] h-[300px]" src="option.png" />
            </div>
            <div
              onClick={() => Template2()}
              className="flex flex-col gap-[10px] justify-center items-center"
            >
              <h2>Input Quiz</h2>
              <img src="quiz22.png" className="w-[400px] h-[300px]" />
            </div>
            <div
              onClick={() => Template3()}
              className="flex flex-col gap-[10px] justify-center items-center"
            >
              <h2>True or False Quiz</h2>
              <img src="quiz3.png" className="w-[400px] h-[300px]" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-[30px] text-[20px] justify-center items-center w-screen h-screen">
          <h1 className="text-[30px]">
            Hello There! Here is the guidance/rules for creating a new Quiz on
            Blake
          </h1>
          <h2>
            1. We have 3 variants of quiz version. Don't worry you can use one
            multiple times!
          </h2>
          <h2>
            2. We have limit for slides. You can add 10 slides per quiz only.
          </h2>
          <h2>
            3. If your imported picture doesn't work it might be unavailable
            picture/media etc. I suggest using a other picture.
          </h2>
          <h2>
            * If you have readen the quidance/rules press "I have readen the
            quidance/rules. "
          </h2>
          <button
            onClick={() => Switch()}
            className="border-[2px] rounded-[12px] border-black bg-[black] text-[white] w-[200px] h-[60px]"
          >
            I have readen the quidance/rules.
          </button>
        </div>
      )}
    </div>
  );
}
