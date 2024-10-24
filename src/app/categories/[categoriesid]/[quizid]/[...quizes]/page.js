import { fetchQuizData } from "@/app/fetchData/page";
import HandleScore from "@/app/components/HandleScore";

const QuizPage = async ({ params }) => {
  const data = await fetchQuizData();

  const categoryId = params.categoriesid;
  const quizId = params.quizid;
  const quizQuestions = data.quizCategories.find((quiz) => quiz.id === quizId);

  if (!quizQuestions || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Quiz not found</h1>
      </div>
    );
  }

  const quizIndex = params.quizes[1];
  const initialScore = 0;

  return (
    <HandleScore
      data={data}
      quizIndex={quizIndex}
      quizQuestions={quizQuestions}
      categoryId={categoryId}
      initialScore={initialScore}
    />
  );
};

export default QuizPage;
