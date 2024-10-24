import { fetchQuizData } from "@/app/fetchData/page";
import { redirect } from "next/navigation";

const QuizPage = async ({ params }) => {
  const data = await fetchQuizData();

  const quizId = params.quizid;
  const quizQuestions = data.quizCategories.find((quiz) => quiz.id === quizId);

  if (!quizQuestions) {
    redirect("/404");
  }

  redirect(`${quizQuestions.id}/quiz/${0}/`);
};

export default QuizPage;
