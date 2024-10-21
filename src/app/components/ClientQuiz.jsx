"use client";

import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";
import MyButton from "@/app/components/Button";
import Navbar from "./Navbar";
import { MdNavigateNext } from "react-icons/md";
import Results from "./Results";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ClientQuiz = ({
  questions,
  categoryId,
  subcategoryId,
  quizIndex = 0,
  quizCategory,
  clientScore,
}) => {
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(Number(quizIndex));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(clientScore);

  useEffect(() => {
    const shuffledData = questions.map((quiz) => ({
      ...quiz,
      shuffledAnswers: shuffleArray([quiz.answer, ...quiz.alternatives]),
      backgroundColor: randomColor({
        luminosity: "dark",
        format: "rgba",
        alpha: 0.5,
      }),
    }));
    setQuizData(shuffledData);
  }, [questions]);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer) {
      setSelectedAnswer(selectedAnswer);

      if (selectedAnswer === quizData[currentIndex]?.answer) {
        setIsAnswerCorrect(true);
        setScore((prevScore) => prevScore + 1);
      } else {
        setIsAnswerCorrect(false);
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < quizData.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
  };

  const currentQuiz = quizData[currentIndex];

  if (currentIndex >= quizData.length) {
    return (
      <Results
        score={score}
        quizData={quizData}
        categoryId={categoryId}
        subcategoryId={subcategoryId}
      />
    );
  }

  return (
    <div>
      <Navbar links={[{ name: "See solutions?", href: "/solutions" }]} />
      <div className="m-auto h-screen flex flex-col justify-center">
        <div className="max-w-screen-md m-auto w-screen">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">
              Score: {score} / {quizData.length}
            </h2>
          </div>

          <div
            key={currentIndex}
            className="rounded-3xl shadow-md text-lg hover:brightness-75 p-6 my-4 "
            style={{
              backgroundColor: currentQuiz.backgroundColor,
            }}
          >
            <h1 className="text-2xl mb-4 w-fit font-bold drop-shadow-md">{`${quizCategory} quiz`}</h1>
            <hr />
            <p className="font-semibold text-xl drop-shadow-md mt-8">
              {`${currentIndex + 1}. ${currentQuiz.question}`}
            </p>
            <div>
              <div className="flex flex-col">
                <ol className="my-2 drop-shadow-md">
                  {currentQuiz.shuffledAnswers.map((answer, answerIndex) => (
                    <li
                      key={answerIndex}
                      className={`text-white/60 drop-shadow-md cursor-pointer p-2 rounded-md border-2 my-3
                      border-white/60 hover:bg-black/10 hover:text-white ${
                        selectedAnswer ? "pointer-events-none" : ""
                      }`}
                      onClick={() => handleAnswerClick(answer)}
                    >
                      {answer}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {isAnswerCorrect !== null && (
            <div className="flex justify-between items-center gap-2 mt-10">
              <h1
                className={`text-2xl border-2 p-2 rounded-lg font-extralight drop-shadow-md ${
                  isAnswerCorrect
                    ? "border-green-600 bg-green-600/20"
                    : "border-red-600 bg-red-600/20"
                } h-full`}
              >
                <span className="font-semibold">
                  {isAnswerCorrect ? "Great!" : "Incorrect 😝"}
                </span>
                {isAnswerCorrect ? " Keep it up 🤩" : ""}
              </h1>
              <MyButton
                href={`/categories/${categoryId}/${subcategoryId}/quiz/${
                  currentIndex + 1
                }/${score}`}
                buttonText={"Next"}
                onClick={handleNextQuestion}
                style={quizData[currentIndex].backgroundColor}
                shadow={"shadow-2xl"}
                glow={
                  "transition-transform duration-300 hover:shadow-yellow-400 hover:shadow-[0_0_10px] hover:scale-105"
                }
                icon={<MdNavigateNext />}
                iconSize={34}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientQuiz;
