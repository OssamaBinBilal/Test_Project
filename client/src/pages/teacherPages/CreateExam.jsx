import { useEffect, useState } from "react";
import MCQ from "../../components/MCQ/MCQ";

const CreateExam = () => {
  const [currentMCQs, setCurrentMCQs] = useState([
    {
      id: 1,
      questionText: "What is the capital of USA?",
      correctAnswer: "Washington DC",
      options: ["Washington DC", "Islamabad", "Seoul", "Sydney"],
    },
    {
      id: 2,
      questionText: "Which element has an atomic mass of 1?",
      correctAnswer: "Hydrogen",
      options: ["Hydrogen", "Oxygen", "Uranium", "Flourine"],
    },
  ]);

  const updateCorrectAnswer = (event, id) => {
    setCurrentMCQs(
      currentMCQs.filter((mcq) => {
        if (mcq.id === id) mcq.correctAnswer = event.target.value;
        return mcq;
      })
    );
  };

  return (
    <>
      {currentMCQs.map((mcq, index) => (
        <MCQ
          key={index + 1}
          passedKey={index + 1}
          mcq={mcq}
          handleRadioChange={updateCorrectAnswer}
        />
      ))}
    </>
  );
};

export default CreateExam;
