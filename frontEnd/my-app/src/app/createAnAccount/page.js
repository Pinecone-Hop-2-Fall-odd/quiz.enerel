"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default function Home() {
  const router = useRouter();
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [verifyPass, setVerifyPass] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState(true);
  const [users, setUsers] = useState("");
  const [done, setDone] = useState(true);
  const [id, SetId] = useState("");

  const SumbitNewUser = async () => {
    if (newPass == verifyPass) {
      //   async function NewUser() {
      const { status, data } = await axios.post(`http://localhost:8080/users`, {
        username: newUser,
        // age: age,
        password: verifyPass,
        id: id,
        // work: work,
      });
      // .then(
      //   (response) => {
      if (status == 200) {
        setDone(!done);
      }
      setUsers(data.data);
      //   },
      //   console.log(users)
      // );
    } else {
      setPasswordCheck(!PasswordCheck);
    }
  };
  function returnToMainPage() {
    router.push("/");
  }
  function quizSpace() {
    router.push("/quiz");
  }
  return (
    // <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-[100px] h-[100px]">
    <div className="bg-[#b3c4d5] w-full h-screen flex justify-center items-center flex-col gap-[35px]">
      <h3
        onClick={() => returnToMainPage()}
        className="border-b-4 border-lashed border-[white] text-[white] hover:border-[#9cb2c9] hover:text-[#9cb2c9]"
      >
        return to main page
      </h3>
      {done ? (
        <div className="flex flex-col justify-center items-center">
          {/* <video width="100" height='100'>
         <source src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fbubble-sticker-by-douglas-schatz-for-ios-android--791648440768468577%2F&psig=AOvVaw3oT1nWMi8OO6wNNuAk4tnZ&ust=1700303373452000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDJrObpyoIDFQAAAAAdAAAAABAE" type="gif"/>
         </video> */}

          {/* <ReactPlayer controls={false} url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fbubble-sticker-by-douglas-schatz-for-ios-android--791648440768468577%2F&psig=AOvVaw3oT1nWMi8OO6wNNuAk4tnZ&ust=1700303373452000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDJrObpyoIDFQAAAAAdAAAAABAE"/> */}
          {/* <ReactPlayer controls={false} url="https://youtu.be/8Jk_5Yry_SE"/> */}

          <div className="flex flex-col justify-center items-center text-[white] flex-wrap">
            <div className="flex items-center">
              <img
                className="w-[50px] h-[50px] animate-bounce"
                src="blue.webp"
              />
              <h1 className="text-[50px]">!Welcome New User!</h1>
              <img
                className="w-[50px] h-[50px] animate-bounce"
                src="blue.webp"
              />
            </div>
            <h3 className="text-[30px]">
              Create a new account to start the journey whit Blake!
            </h3>
          </div>
          <div className="flex flex-col gap-[35px]">
            <input
              className="rounded-[10px] text-[grey] outline-none w-[300px] h-[40px]"
              placeholder="Username.."
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <input
              className="rounded-[10px] text-[grey] w-[300px] h-[40px] outline-none"
              placeholder="Password.."
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            {PasswordCheck ? (
              <></>
            ) : (
              <div>
                <h4 className="text-[red] font-[10px]">
                  *Please check spelling mistakes etc*
                </h4>
              </div>
            )}
            <input
              className="rounded-[10px] text-[grey] w-[300px] h-[40px] outline-none"
              placeholder="Verify Password.."
              value={verifyPass}
              onChange={(e) => setVerifyPass(e.target.value)}
            />
            {PasswordCheck ? (
              <></>
            ) : (
              <div>
                <h4 className="text-[red] font-[10px]">
                  *Or you might re-entered the password <br />
                  wrong? Please check spelling mistakes <br />
                  etc*
                </h4>
              </div>
            )}
          </div>
          <button
            onClick={() => SumbitNewUser()}
            className="border-[#9cb2c9] border-[1px] bg-[#9cb2c9] w-[165px] h-[40px] rounded-[10px] text-white mt-[30px]"
          >
            Sumbit
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-[10px] justify-center items-center">
          <div className="flex flex-col p-[15px] justify-center items-center">
            <h2 className="text-white text-[20px]">
              Hello dear user {newUser}! Our journey awaits..
            </h2>
            <h2 className="text-white text-[20px]">
              You can go to the start page to login whit your new account OR
              <span
                className="border-b-2 border-[white] text-white hover:border-[#9cb2c9] hover:text-[#9cb2c9] ml-[4px]"
                onClick={() => quizSpace()}
              >
                click here
              </span>{" "}
              to start your journey whit Blake!
            </h2>
          </div>
          <img
            className="w-[50px] h-[50px] bg-[white] rounded-[50%] animate-bounce"
            src="pudding.png"
          />
        </div>
      )}
    </div>
  );
}
