import { fetchQuizData } from "./fetchData/page";
import QuizApp from "./components/quiz-app/QuizApp";

const homepage = async () => {
  const quizData = await fetchQuizData();

  return <QuizApp quizData={quizData} />;
};

export default homepage;
