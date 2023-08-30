import { useEffect, useState } from "react";
import MCQ from "../../components/MCQ/MCQ";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextQuestion from "../../components/TextQuestion/TextQuestion";
import AddMCQModal from "./modals/AddMCQModal";
import AddQuestionModal from "./modals/AddQuestionModal";
import { createExam } from "../../apis/teacher/teacher";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const CreateExam = () => {
  const [isAddMCQModalOpen, setIsAddMCQModalOpen] = useState(false);
  const [isAddQuestionModalOpen, setIsAddQuestionModalOpen] = useState(false);

  const [currentMCQs, setCurrentMCQs] = useState([]);
  const [currentTextQuestions, setCurrentTextQuestions] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [expireDate, setExpireDate] = useState("");

  const [startTime, setStartTime] = useState("");
  const [expireTime, setExpireTime] = useState("");

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

  useEffect(() => {
    console.log(startDate);
    console.log(expireDate);
    console.log(expireTime);
    console.log(startTime);
  }, [startDate, expireDate, expireTime, startTime]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={(e) =>
            setStartDate(
              `${e.$y}-${e.$M + 1 < 10 ? `0${e.$M}` : e.$M + 1}-${e.$D}`
            )
          }
        />
        <DatePicker
          onChange={(e) =>
            setExpireDate(
              `${e.$y}-${e.$M + 1 < 10 ? `0${e.$M}` : e.$M + 1}-${e.$D}`
            )
          }
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker", "TimePicker"]}>
          <TimePicker
            label="Starting Time"
            value={startTime}
            onChange={(newValue) =>
              setStartTime(
                `${newValue.$H}:${
                  newValue.$m < 10 ? `0${newValue.$m}` : newValue.$m
                }:00`
              )
            }
          />
          <TimePicker
            label="Expiry Time"
            value={expireTime}
            onChange={(newValue) =>
              setExpireTime(
                `${newValue.$H}:${
                  newValue.$m < 10 ? `0${newValue.$m}` : newValue.$m
                }:00`
              )
            }
          />
        </DemoContainer>
      </LocalizationProvider>

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
            createExam(
              currentMCQs,
              currentTextQuestions,
              startDate,
              expireDate,
              startTime,
              expireTime
            )
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
