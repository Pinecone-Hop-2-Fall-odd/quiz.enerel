import { useEffect, useState } from "react";

const getTime = (defSeconds) => {
  const seconds = defSeconds % 60;
  const minutes = Math.floor(defSeconds / 60) % 60;
  const hours = Math.floor(Math.floor(defSeconds / 60) / 60);

  return {
    seconds,
    minutes,
    hours,
  };
};

export const Timer = ({ setResult, result }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds >= 420) {
      setResult(!result);
    }
  }, [seconds]);

  return (
    <div className="text-[#69b4ff] text-[15px] flex">
      {/* <h3 onChange={() => CheckTime()} value={ama}> */}
      <h3>{getTime(seconds).minutes}</h3>
      <h3>:</h3>
      <h3>{getTime(seconds).seconds}</h3>
    </div>
  );
};
