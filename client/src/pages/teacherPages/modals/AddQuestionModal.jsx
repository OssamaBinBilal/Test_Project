import { useRef } from "react";
import Modal from "../../../components/Modal/Modal";
import Input from "../../../components/Input/Input";
import { Button } from "@mui/material";

const AddQuestionModal = ({ open, setOpen, idToAssign, addQuestion }) => {
  const questionRef = useRef(null);
  const answerRef = useRef(null);

  const handleSubmitQuestion = () => {
    if (questionRef.current.value === "") {
      console.log("Please provide a question statement");
      return;
    } else if (answerRef.current.value === "") {
      console.log("Please provide an answer for your question");
      return;
    }

    addQuestion({
      id: idToAssign,
      text: questionRef.current.value,
      answer: answerRef.current.value,
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
