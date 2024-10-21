import quizData from "../../../../../../../public/quiz_data";
import ClientQuiz from "@/app/components/ClientQuiz";

const QuizPage = ({ params }) => {
  const categoryId = params.categoriesid;
  const quizId = params.quizid;
  const score = Number(params.quizes[2]);
  const quizQuestions = quizData.find((quiz) => quiz.id === quizId);

  if (!quizQuestions) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Quiz not found</h1>
      </div>
    );
  }

  const quizIndex = params.quizes[1];

  return (
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
  );
};

export default QuizPage;
