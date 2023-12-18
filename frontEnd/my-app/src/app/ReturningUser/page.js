"use client";

import {} from "@/app/page";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Users(props) {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [currentPass, setCurrentPass] = useState("");
  const {
    username,
    age,
    id,
    setUsers,
    password: correctPassword,
    work,
  } = props;

  console.log(props);
  useEffect(() => {}, []);
  function UsernameCheck() {
    axios.get(`http://localhost:8080/username/${userName}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setIsLoggingIn(!isLoggingIn);
      } else {
        alert("error 404: User not found.");
      }
    });
  }
  function CheckPassword() {
    axios.get(`http://localhost:8080/username/${userName}`).then((res) => {
      if (res.data.user.password == currentPass) {
        router.push("/quiz");
      } else {
        alert("error 400: Password incorrect.");
        console.log(res);
      }
    });
  }

  function GoBack() {
    router.push("/");
  }
  return (
    <div className="flex bg-[#5ac650] text-[black] p-[10px] h-screen flex-col justify-center items-center">
      <h2
        onClick={() => GoBack()}
        className="text-white text-[30px] mb-[300px] border-b-2 border-white hover:border-[green] hover:text-[green]"
      >
        Go Back
      </h2>
      <div className="flex gap-[15px]">
        <img className="w-[50px] h-[50px] animate-bounce" src="lollies.png" />
        <h1 className="text-white text-[30px] mb-[20px]">Welcome Back!</h1>
        <img className="w-[50px] h-[50px] animate-bounce" src="lollies.png" />
      </div>
      <div className="flex flex-row gap-[10px]">
        <input
          onChange={(e) => setUserName(e.target.value)}
          className="w-[500px] h-[40px] rounded-[10px]"
          placeholder="Username.."
        />
        <button
          onClick={UsernameCheck}
          className="border-[white] bg-[white] ml-[5px] h-[40px] rounded-[10px] text-[grey]"
        >
          sumbit
        </button>
      </div>
      {isLoggingIn ? (
        <div className="mt-[30px]">
          <input
            className="border-[white] bg-[white] ml-[5px] h-[40px] w-[400px] rounded-[10px] text-[grey]"
            placeholder="Current Password.."
            onChange={(e) => setCurrentPass(e.target.value)}
            value={currentPass}
          />
          <button
            onClick={() => CheckPassword()}
            className="border-[white] bg-[white] ml-[5px] h-[40px] rounded-[10px] text-[grey]"
          >
            Check
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Users;
