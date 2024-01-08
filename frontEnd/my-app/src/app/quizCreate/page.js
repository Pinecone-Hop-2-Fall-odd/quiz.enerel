"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function Home() {
  const routers = useRouter();
  function Switch() {
    routers.push("/quiz1");
  }
  return (
    <div>
      <div className="flex flex-col gap-[30px] text-[20px] justify-center items-center w-screen h-screen bg-[#0f4589] text-[white]">
        <h1 className="text-[30px]">
          Hello There! Here is the guidance/rules for creating a new Quiz on
          Blake
        </h1>
        <h2>
          1. If one of your quiz doesn't appear it might be a server issue.
        </h2>
        <h2>
          2. We have limit for slides. You can add 10 slides per quiz only.
        </h2>
        <h2>3. inappropriate subject will lead to a ban.</h2>
        <h2>
          * If you have readen the quidance/rules press the button to continue"*
        </h2>
        <button
          onClick={() => Switch()}
          className="border-[2px] rounded-[12px] border-[#69b4ff] bg-[#69b4ff] text-[white] w-[200px] h-[60px]"
        >
          I have readen the quidance/rules.
        </button>
      </div>
    </div>
  );
}
