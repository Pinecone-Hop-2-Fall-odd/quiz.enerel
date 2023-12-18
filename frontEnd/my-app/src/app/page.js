"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  function NewUser(){
    router.push("/createAnAccount")
    console.log("working new user")
  }
  function ReturningUser(){
    router.push("/ReturningUser")
  }
  return (
    // <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-[100px] h-[100px]">
    <div className="bg-[#32475c] w-full h-screen flex justify-center items-center flex-col gap-[20px]">
      {/* <Image src="http://u-are-my-sun-shine.tumblr.com/post/53199562460" alt="" width={500} height={500}/> */}
      <h1 className="text-[60px] text-[#84a0bc]">Blake Quiz!</h1>
      <div className="flex gap-[40px]">
        <div>
        <h2 onClick={()=>NewUser()} className="text-[#84a0bc] font-[20px] border-b-4 border-dashed border-[#84a0bc] hover:text-[white] hover:border-[white]">New to Blake!</h2>
        </div>
        <h2 onClick={()=>ReturningUser()} className="text-[#84a0bc] font-[20px] border-b-4 border-dashed border-[#84a0bc] hover:text-[white] hover:border-[white]">Returning User!</h2>
      </div>
    </div>
  );
}
