import { useState } from "react";
import MCQ from "../../components/MCQ/MCQ";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextQuestion from "../../components/TextQuestion/TextQuestion";
import AddMCQModal from "./modals/AddMCQModal";
import AddQuestionModal from "./modals/AddQuestionModal";
import { createExam } from "../../apis/teacher/teacher";

const CreateExam = () => {
  const [isAddMCQModalOpen, setIsAddMCQModalOpen] = useState(false);
  const [isAddQuestionModalOpen, setIsAddQuestionModalOpen] = useState(false);

  const [currentMCQs, setCurrentMCQs] = useState([]);
  const [currentTextQuestions, setCurrentTextQuestions] = useState([]);

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
        <Button
          sx={{ ml: 2 }}
          variant="contained"
          color="success"
          onClick={() =>
            createExam(currentMCQs, currentTextQuestions)
              .then((response) => console.log(response))
              .catch((e) => console.log(e))
          }
        >
          SUBMIT EXAM
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
