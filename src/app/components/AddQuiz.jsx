"use client";

import { useState } from "react";
import AddNewQuiz from "../add-new-quiz";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Define the initial structure for a question
const quizCategoriesData = {
  question: "",
  answer: "",
  alternatives: ["", "", ""], // Placeholder for alternatives
};

const initialQuizCategoriesData = {
  id: "", // This should be the quiz ID you're appending to
  name: "", // The name of the existing quiz
  questions: [quizCategoriesData], // New questions to add
};

const QuizOverview = ({ quizData }) => {
  const [openQuizDialog, setOpenQuizDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizFormData, setQuizFormData] = useState(initialQuizCategoriesData);

  const [currentEditedQuizId, setCurrentEditedQuizId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  // Handle the API call to save quiz data
  const handleSaveQuizData = async () => {
    try {
      setLoading(true);

      // Prepare the data to send to the API
      const updatedQuizFormData = {
        ...quizFormData,
        id: currentEditedQuizId || quizFormData.id, // Use the current edited quiz ID or form ID
      };

      const apiResponse = await fetch("/api/add-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedQuizFormData),
      });

      const result = await apiResponse.json();

      if (result?.success) {
        // Reset the form and close the dialog if successful
        setQuizFormData(initialQuizCategoriesData);
        setOpenQuizDialog(false);
        router.refresh();
      } else {
        console.error("Failed to save quiz:", result.message);
      }
    } catch (error) {
      console.error("An error occurred while saving the quiz:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-2 flex flex-col gap-10 absolute z-10">
      <AddNewQuiz
        openQuizDialog={openQuizDialog}
        setOpenQuizDialog={setOpenQuizDialog}
        loading={loading}
        setLoading={setLoading}
        quizFormData={quizFormData}
        setQuizFormData={setQuizFormData}
        handleSaveQuizData={handleSaveQuizData}
        currentEditedQuizId={currentEditedQuizId}
        setCurrentEditedQuizId={setCurrentEditedQuizId}
        quizData={quizData}
      />
    </div>
  );
};

export default QuizOverview;
