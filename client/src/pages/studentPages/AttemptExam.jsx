import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExamQuestions } from "../../apis/student/student";
import MCQ from "../../components/MCQ/MCQ";
import { Box, Button, Slide } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InputTextQuestion from "../../components/InputTextQuestion/InputTextQuestion";

const AttemptExam = () => {
  const { id } = useParams();

  const [mcqs, setMcqs] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [mcqsSolution, setMcqsSolution] = useState([]);
  const [textSolutions, setTextSolutions] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [renderQuestions, setRenderQuestions] = useState([]);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const updateMCQAnswer = (id, answer) => {
    const index = mcqsSolution.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedArray = [...mcqsSolution];
      updatedArray[index] = { ...updatedArray[index], answer };
      setMcqsSolution(updatedArray);
    } else {
      setMcqsSolution([...mcqsSolution, { id, answer }]);
    }
    setIsNextButtonDisabled(false);
  };

  const updateTextAnswer = (id, answer) => {
    const index = textSolutions.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedArray = [...textSolutions];
      updatedArray[index] = { ...updatedArray[index], answer };
      setTextSolutions(updatedArray);
    } else {
      setTextSolutions([...textSolutions, { id, answer }]);
    }
  };

  useEffect(() => {
    getExamQuestions(id)
      .then((response) => {
        setMcqs(response.data.mcqs);
        setQuestions(response.data.questions);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setIsNextButtonDisabled(true);
  }, [activeStep]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Button
          onClick={
            activeStep < mcqs.length + questions.length - 1
              ? handleNext
              : () => {
                  console.log(mcqsSolution);
                  console.log(textSolutions);
                }
          }
          sx={{ marginLeft: "auto" }}
          variant="contained"
          disabled={isNextButtonDisabled}
          color={
            activeStep < mcqs.length + questions.length - 1 ? "info" : "success"
          }
        >
          {activeStep < mcqs.length + questions.length - 1 ? "Next" : "Submit"}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90%",
        }}
      >
        <Carousel
          index={activeStep}
          autoPlay={false}
          indicators={false}
          animation="slide"
          navButtonsAlwaysInvisible={true}
          duration={500}
        >
          {[...mcqs, ...questions].map((question, index) => (
            <Box
              key={index + 1}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {question.options && (
                <MCQ
                  key={index + 1}
                  passedKey={index + 1}
                  mcq={question}
                  handleRadioChange={(event) =>
                    updateMCQAnswer(question.id, event.target.value)
                  }
                />
              )}
              {!question.options && (
                <InputTextQuestion
                  key={index + 1}
                  passedKey={index + 1}
                  question={question}
                  updateTextAnswer={updateTextAnswer}
                  setIsNextButtonDisabled={setIsNextButtonDisabled}
                />
              )}
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default AttemptExam;
