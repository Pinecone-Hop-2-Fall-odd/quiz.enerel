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
      const { status, data } = await axios.post(`http://localhost:8080/users`, {
        username: newUser,
        password: verifyPass,
        id: id,
      });

      if (status == 200) {
        setDone(!done);
      }
      setUsers(data.data);
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
    <div
      className="bg-gradient-to-b from-[#5598ec] to-[#0f4589]
    w-full h-screen flex justify-center items-center flex-col gap-[35px]"
    >
      <h3
        onClick={() => returnToMainPage()}
        className="border-b-4 border-lashed border-[#69b4ff] text-[#69b4ff] hover:border-[#89c3fe] hover:text-[#89c3fe]"
      >
        return to main page
      </h3>
      {done ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-[#69b4ff] flex-wrap">
            <div className="flex items-center">
              <img
                className="w-[50px] h-[50px] animate-bounce"
                src="bubble.png"
              />
              <h1 className="text-[50px]">!Welcome New User!</h1>
              <img
                className="w-[50px] h-[50px] animate-bounce"
                src="bubble.png"
              />
            </div>
            <h3 className="text-[30px]">
              Create a new account to start the journey whit Blake!
            </h3>
          </div>
          <div className="flex flex-col gap-[35px] mt-[20px]">
            <input
              className="rounded-[10px] text-[#69b4ff] outline-none w-[300px] h-[40px]"
              placeholder="Username.."
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <input
              className="rounded-[10px] text-[#69b4ff] w-[300px] h-[40px] outline-none"
              placeholder="Password.."
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            {PasswordCheck ? (
              <></>
            ) : (
              <div>
                <h4 className="text-[#b83131] font-[10px]">
                  *Please check spelling mistakes etc*
                </h4>
              </div>
            )}
            <input
              className="rounded-[10px] text-[#69b4ff] w-[300px] h-[40px] outline-none"
              placeholder="Verify Password.."
              value={verifyPass}
              onChange={(e) => setVerifyPass(e.target.value)}
            />
            {PasswordCheck ? (
              <></>
            ) : (
              <div>
                <h4 className="text-[#b83131] font-[10px]">
                  *Or you might re-entered the password <br />
                  wrong? Please check spelling mistakes <br />
                  etc*
                </h4>
              </div>
            )}
          </div>
          <button
            onClick={() => SumbitNewUser()}
            className="border-[#5695d3] border-[1px] bg-[#5695d3] w-[165px] h-[40px] rounded-[10px] text-[#bbd9f8] mt-[30px]"
          >
            Sumbit
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-[10px] justify-center items-center">
          <div className="flex flex-col p-[15px] justify-center items-center">
            <h2 className="text-[#69b4ff] text-[20px]">
              Hello dear user {newUser}! Our journey awaits..
            </h2>
            <h2 className="text-[#69b4ff] text-[20px]">
              You can go to the start page to login whit your new account OR
              <span
                className="border-b-2 border-[#69b4ff] text-[#69b4ff] hover:border-[#a4d1ff] hover:text-[#a4d1ff] ml-[4px]"
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
