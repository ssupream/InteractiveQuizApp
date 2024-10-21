"use client";

import ClientQuiz from "@/app/components/ClientQuiz";
import { fetchQuizData } from "@/app/fetchData/page";

const QuizPage = async ({ params }) => {
  const data = await fetchQuizData();

  const categoryId = params.categoriesid;
  const quizId = params.quizid;
  const score = Number(params.quizes[2]);
  const quizQuestions = data.quizCategories.find((quiz) => quiz.id === quizId);

  if (!quizQuestions || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Quiz not found</h1>
      </div>
    );
  }

  const quizIndex = params.quizes[1];

  return (
    <div className="bg-black/20">
      <div className="m-auto max-w-screen-xl">
        <ClientQuiz
          questions={quizQuestions.questions}
          categoryId={categoryId}
          subcategoryId={quizQuestions.id}
          quizCategory={quizQuestions.name}
          quizIndex={quizIndex}
          clientScore={score}
        />
      </div>
    </div>
  );
};

export default QuizPage;
