"use client";

import quizData from "../../../../../../public/quiz_data";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const QuizPage = ({ params }) => {
  const quizId = params.quizid;

  const quizQuestions = quizData.find((quiz) => quiz.id === quizId);

  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!quizQuestions) return;

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(countdownInterval);
          redirect(`${quizQuestions.id}/quiz/${0}/${0}`);
        }
        return prevCountdown - 1;
      });
    }, 700);

    return () => clearInterval(countdownInterval);
  }, [quizQuestions]);

  if (!quizQuestions) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Quiz not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">{`You are about to start the ${quizQuestions.name} quiz! 🤩`}</h1>
      <p className="text-2xl mt-4">{`Starting in ${countdown}...`}</p>
    </div>
  );
};

export default QuizPage;
