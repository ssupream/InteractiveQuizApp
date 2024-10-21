import { updateFetchQuizData } from "./fetchData/page";
import Quiz from "./components/Quiz";

const homepage = async () => {
  const quizData = await updateFetchQuizData();

  return <Quiz quizData={quizData} />;
};

export default homepage;
