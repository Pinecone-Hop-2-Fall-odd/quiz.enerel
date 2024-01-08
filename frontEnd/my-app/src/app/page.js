"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function NewUser() {
    router.push("/createAnAccount");
    console.log("working new user");
  }
  function ReturningUser() {
    router.push("/ReturningUser");
  }
  return (
    <div className="bg-gradient-to-b from-[#5598ec] to-[#0f4589] w-full h-screen flex justify-center items-center flex-col gap-[20px]">
      <h1 className="text-[60px] text-[#5695d3]">Blazer</h1>
      <h3 className="text-[#5695d3]">A platform for quiz enjoyers.</h3>
      <div className="flex gap-[40px]">
        <div>
          <h2
            onClick={() => NewUser()}
            className="text-[#5695d3] font-[20px] border-b-4 border-dashed border-[#5695d3] hover:text-[#89c3fe] hover:border-[#89c3fe]"
          >
            New to Blake!
          </h2>
        </div>
        <h2
          onClick={() => ReturningUser()}
          className="text-[#5695d3] font-[20px] border-b-4 border-dashed border-[#5695d3] hover:text-[#89c3fe] hover:border-[#89c3fe]"
        >
          Returning User!
        </h2>
      </div>
    </div>
  );
}
