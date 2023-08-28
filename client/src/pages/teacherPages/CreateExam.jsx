import { useState } from "react";
import MCQ from "../../components/MCQ/MCQ";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextQuestion from "../../components/TextQuestion/TextQuestion";
import AddMCQModal from "./modals/AddMCQModal";
import AddQuestionModal from "./modals/AddQuestionModal";

const CreateExam = () => {
  const [isAddMCQModalOpen, setIsAddMCQModalOpen] = useState(false);
  const [isAddQuestionModalOpen, setIsAddQuestionModalOpen] = useState(false);

  const [currentMCQs, setCurrentMCQs] = useState([
    {
      id: 1,
      question_statement: "Which gas is responsible for the greenhouse effect?",
      correctAnswer: "Oxygen",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    },
    {
      id: 2,
      question_statement: "Which element has an atomic mass of 1?",
      correctAnswer: "Hydrogen",
      options: ["Hydrogen", "Oxygen", "Uranium", "Flourine"],
    },
    {
      id: 3,
      question_statement: "What is the chemical symbol for gold?",
      correctAnswer: "Au",
      options: ["Au", "Ag", "Fe", "Cu"],
    },
    {
      id: 4,
      question_statement: " What is the largest mammal?",
      correctAnswer: "Blue Whale",
      options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    },
  ]);

  const [currentTextQuestions, setCurrentTextQuestions] = useState([
    {
      id: 1,
      text: "Who is the current president of the United States?",
      answer:
        "The current president of the USA is Joe Biden, whereas Donald J.Trump was the one prior to him",
    },
    {
      id: 2,
      text: "Can you write a brief document about the Indian Revolt?",
      answer:
        "The Indian Revolt, also known as the Indian Rebellion of 1857 or the Sepoy Mutiny, marked a pivotal moment in the history of British colonial rule in India. This armed uprising, which began as a localized mutiny among Indian soldiers serving in the British East India Company's army, soon evolved into a widespread rebellion involving various sections of Indian society. Spanning from 1857 to 1858, the Indian Revolt had far-reaching implications for both India and the British Empire.",
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

  const addMCQ = (mcq) => {
    setCurrentMCQs([...currentMCQs, mcq]);
  };

  const removeMCQ = (mcq) => {
    setCurrentMCQs(currentMCQs.filter((item) => item.id !== mcq.id));
  };

  const addQuestion = (question) => {
    setCurrentTextQuestions([...currentTextQuestions, question]);
  };

  const removeQuestion = (question) => {
    setCurrentTextQuestions(
      currentTextQuestions.filter((item) => item.id !== question.id)
    );
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button variant="contained" onClick={() => setIsAddMCQModalOpen(true)}>
          + ADD MCQ
        </Button>
        <Button
          sx={{ ml: 2 }}
          variant="contained"
          onClick={() => setIsAddQuestionModalOpen(true)}
        >
          + ADD QUESTION
        </Button>
      </Box>
      <Box
        sx={{
          minHeight: "90%",
          p: 3,
        }}
      >
        {currentMCQs.map((mcq, index) => (
          <MCQ
            key={index + 1}
            passedKey={index + 1}
            mcq={mcq}
            removeMCQ={removeMCQ}
            handleRadioChange={updateCorrectAnswer}
          />
        ))}
        {currentTextQuestions.map((question, index) => (
          <TextQuestion
            key={index + 1}
            passedKey={currentMCQs.length + index + 1}
            question={question}
            removeQuestion={removeQuestion}
          />
        ))}
      </Box>
      <AddMCQModal
        open={isAddMCQModalOpen}
        setOpen={setIsAddMCQModalOpen}
        idToAssign={currentMCQs.length + 1}
        addMCQ={addMCQ}
      />
      <AddQuestionModal
        open={isAddQuestionModalOpen}
        setOpen={setIsAddQuestionModalOpen}
        idToAssign={currentMCQs.length + currentTextQuestions.length + 1}
        addQuestion={addQuestion}
      />
    </>
  );
};

export default CreateExam;
