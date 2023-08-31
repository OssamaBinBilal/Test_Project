import { useRef } from "react";
import Modal from "../../../components/Modal/Modal";
import Input from "../../../components/Input/Input";
import { Button } from "@mui/material";
import { useSnackbar } from "../../../context/useSnackbar";

const AddQuestionModal = ({ open, setOpen, idToAssign, addQuestion }) => {
  const questionRef = useRef(null);
  const answerRef = useRef(null);
  const scoreRef = useRef(null);

  const { displaySnackbar } = useSnackbar();

  const handleSubmitQuestion = () => {
    if (questionRef.current.value === "") {
      displaySnackbar("Please provide a question statement", "error");
      return;
    } else if (answerRef.current.value === "") {
      displaySnackbar("Please provide an answer for your question", "error");
      return;
    } else if (scoreRef.current.value === "") {
      displaySnackbar("Please give your question a maximum score", "error");
      return;
    }

    addQuestion({
      id: idToAssign,
      questionText: questionRef.current.value,
      correctAnswer: answerRef.current.value,
      maxScore: scoreRef.current.value,
    });
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <Input
        inputRef={questionRef}
        required={false}
        type="text"
        label="What would your question's statement be?"
        sx={{ width: "100%", mb: 2 }}
      />
      <Input
        inputRef={answerRef}
        required={false}
        type="text"
        label="Add an answer for your question"
        sx={{ width: "100%", mb: 2 }}
      />
      <Input
        inputRef={scoreRef}
        required={false}
        type="text"
        label="Add a maximum score for your question"
        sx={{ width: "100%" }}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ width: "100%", mt: 5 }}
        onClick={handleSubmitQuestion}
      >
        ADD QUESTION
      </Button>
    </Modal>
  );
};

export default AddQuestionModal;
