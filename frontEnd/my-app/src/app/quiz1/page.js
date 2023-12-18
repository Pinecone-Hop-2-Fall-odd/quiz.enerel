"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const [activeDiv, setActiveDiv] = useState(null);
  const [answer, setAnswer] = useState({});
  const [finish, setFinish] = useState(false);
  const [stuff, setStuff] = useState([]);
  const router = useRouter();
  console.log(stuff);

  const [NumberOfTheSlides, setNumberOfTheSlides] = useState(0);
  function ChosenAnswer(index) {
    setActiveDiv(index === activeDiv ? null : index);
  }
  async function CreateAquiz() {
    if (activeDiv === null) {
      alert(
        "Please fill out the page and choose the correct answer of the quiz."
      );
      return;
    } else if (answer == null) {
      alert("Enter questions, answer etc!");
      return;
    }
    if (NumberOfTheSlides == 0) {
      const res = await axios.post(`http://localhost:8080/quiz1`, {
        question: answer[4],
        answer: [
          {
            answer: answer[0],
            isCorrect: activeDiv === 0 ? true : false,
          },
          {
            answer: answer[1],
            isCorrect: activeDiv === 1 ? true : false,
          },
          {
            answer: answer[2],
            isCorrect: activeDiv === 2 ? true : false,
          },
          {
            answer: answer[3],
            isCorrect: activeDiv === 3 ? true : false,
          },
        ],
        category: answer[5],
      });

      if (res.status == 200) {
        setFinish(!finish);
      } else {
        alert("error");
      }
    } else {
      let correctNum = 0;
      stuff.map(async (data) => {
        console.log(data);
        const response = await axios.post(`http://localhost:8080/quiz1`, {
          question: data.question,
          answer: [
            {
              answer: data.answer[0].answer,
              isCorrect: activeDiv === 0 ? true : false,
            },
            {
              answer: data.answer[1].answer,
              isCorrect: activeDiv === 1 ? true : false,
            },
            {
              answer: data.answer[2].answer,
              isCorrect: activeDiv === 2 ? true : false,
            },
            {
              answer: data.answer[3].answer,
              isCorrect: activeDiv === 3 ? true : false,
            },
          ],
          category: data.category,
        });
        if (response.status == 200) {
          correctNum += 1;
          if (stuff.length === correctNum) setFinish(!finish);
        } else {
          alert("error");
        }
      });
    }
  }
  function ChosenAnswer(index) {
    setActiveDiv(index === activeDiv ? null : index);
  }
  function AddanOtherSlide() {
    if (activeDiv === null) {
      alert(
        "Please fill out the page and choose the correct answer of the quiz."
      );
      return;
    }
    setStuff((current) => [
      ...current,
      {
        question: answer[4],
        answer: [
          {
            answer: answer[0],
            isCorrect: activeDiv === 0 ? true : false,
          },
          {
            answer: answer[1],
            isCorrect: activeDiv === 1 ? true : false,
          },
          {
            answer: answer[2],
            isCorrect: activeDiv === 2 ? true : false,
          },
          {
            answer: answer[3],
            isCorrect: activeDiv === 3 ? true : false,
          },
        ],
        category: answer[5],
      },
    ]);
    setAnswer("");

    setActiveDiv(activeDiv == null);

    if (NumberOfTheSlides === 10) {
      alert("Oh you reached the max slides!");
    } else {
      setNumberOfTheSlides(NumberOfTheSlides + 1);
    }
  }
  function BackToMain() {
    router.push("/quiz");
  }

  return (
    <div className="w-[1200px] h-[850px] bg-[white] rounded-[7px] flex flex-col justify-center items-center gap-[100px] text-[black]">
      {finish ? (
        <div className="flex justify-center items-center flex-col gap-[10px]">
          <h2 className="text-black text-[30px]">
            Great you created your own quiz! Go try it out in the main page. :D
          </h2>
          <h4
            onClick={() => BackToMain()}
            className="hover:text-[#8ea2f9] border-b-[1px] border-[black] hover:border-[#8ea2f9] w-[270px]"
          >
            Click here to go back to main page
          </h4>
        </div>
      ) : (
        <div className="w-[1200px] h-[850px] bg-[white] rounded-[7px] flex flex-col justify-center items-center gap-[100px] text-[black]">
          <div className="flex flex-wrap w-[700px] h-[40px] justify-center gap-[10px] mt-[30px]">
            <h1 className="text-[red] text-[20px]">
              *There will be only 1 correct answer! If the answer is blue it
              means its the correct answer. You can choose the correct answer.
            </h1>
            <div className="flex gap-[5px]">
              <h3>{NumberOfTheSlides}</h3>
              <h3>/ 10</h3>
            </div>
          </div>
          <div className="flex flex-row gap-[30px]">
            <input
              placeholder="Question of the quiz.."
              className="border-[2px] border-[#00456b] rounded-[5px] w-[250px] h-[30px]"
              onChange={(e) =>
                setAnswer((prev) => ({ ...prev, [4]: e.target.value }))
              }
              value={answer[4] || ""}
            />
            <input
              placeholder="Category of the quiz.."
              className="border-[2px] border-[#00456b] rounded-[5px] w-[250px] h-[30px]"
              onChange={(e) =>
                setAnswer((prev) => ({ ...prev, [5]: e.target.value }))
              }
              value={answer[5] || ""}
            />
          </div>
          <Image
            src={`https://freepngimg.com/thumb/click_here/1-2-click-here-png-clipart.png`}
            width={700}
            height={400}
            alt=""
            className="border-2 border-[#00456b] rounded-[10px]"
          />
          <div className="flex flex-wrap gap-[20px] justify-center align-center">
            <div
              onClick={() => ChosenAnswer(0)}
              className={`w-[300px] border-2 ${
                activeDiv !== 0
                  ? "border-[#00456b]  text-[#00456b]"
                  : "border-[#60a0c3]  text-[#60a0c3]"
              } rounded-[10px] h-[30px] flex justify-start items-center gap-[10px] p-[5px]`}
            >
              <h2 className="">a.</h2>
              <input
                onChange={(e) =>
                  setAnswer((prev) => ({ ...prev, [0]: e.target.value }))
                }
                placeholder="Answer a.."
                value={answer[0] || ""}
              />
            </div>
            <div
              onClick={() => ChosenAnswer(1)}
              className={`w-[300px] border-2 ${
                activeDiv !== 1
                  ? "border-[#00456b]  text-[#00456b]"
                  : "border-[#60a0c3]  text-[#60a0c3]"
              } rounded-[10px] h-[30px] flex justify-start items-center gap-[10px] p-[5px]`}
            >
              <h2 className="">b.</h2>
              <input
                placeholder="Answer b.."
                value={answer[1] || ""}
                onChange={(e) =>
                  setAnswer((prev) => ({ ...prev, [1]: e.target.value }))
                }
              />
            </div>
            <div
              onClick={() => ChosenAnswer(2)}
              className={`w-[300px] border-2 ${
                activeDiv !== 2
                  ? "border-[#00456b]  text-[#00456b]"
                  : "border-[#60a0c3]  text-[#60a0c3]"
              } rounded-[10px] h-[30px] flex justify-start items-center gap-[10px] p-[5px]`}
            >
              <h2 className="">c.</h2>
              <input
                placeholder="Answer c.."
                value={answer[2] || ""}
                onChange={(e) =>
                  setAnswer((prev) => ({ ...prev, [2]: e.target.value }))
                }
              />
            </div>

            <div
              onClick={() => ChosenAnswer(3)}
              className={`w-[300px] border-2 ${
                activeDiv !== 3
                  ? "border-[#00456b]  text-[#00456b]"
                  : "border-[#60a0c3]  text-[#60a0c3]"
              } rounded-[10px] h-[30px] flex justify-start items-center gap-[10px] p-[5px]`}
            >
              <h2 className="">d.</h2>
              <input
                placeholder="Answer d.."
                value={answer[3] || ""}
                onChange={(e) =>
                  setAnswer((prev) => ({ ...prev, [3]: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-[20px]">
            <button
              onClick={() => CreateAquiz()}
              className="text-[black] w-[200px] h-[30px] border-[1px] border-[black] rounded-[10px] bg-black/"
            >
              Create!
            </button>
            <button
              onClick={() => AddanOtherSlide()}
              className="text-[white] w-[200px] h-[30px] border-[1px] border-[black] rounded-[10px] bg-[black]"
            >
              Add a other slide!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 150-200
