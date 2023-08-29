import { useRef, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import Input from "../../../components/Input/Input";
import Chips from "../../../components/Chips/Chips";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const AddMCQModal = ({ open, setOpen, idToAssign, addMCQ }) => {
  const textRef = useRef(null);
  const enterOptionRef = useRef(null);
  const [possibleOptions, setPossibleOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState("");

  const deletePossibleOption = (optionToDelete) => {
    setPossibleOptions(
      possibleOptions.filter((option) => option !== optionToDelete)
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (enterOptionRef.current.value === "") {
        console.log("Pleas enter something");
        return;
      } else if (possibleOptions.length === 4) {
        console.log("You can add a maximum of 4 options");
        return;
      } else if (possibleOptions.includes(enterOptionRef.current.value)) {
        console.log("Option already included");
        return;
      } else {
        setPossibleOptions([...possibleOptions, enterOptionRef.current.value]);
        enterOptionRef.current.value = "";
      }
    }
  };

  const setAsCorrectOption = (passedOption) => {
    setCorrectOption(passedOption);
  };

  const handleSubmitMCQ = () => {
    if (textRef.current.value === "") {
      console.log("Please provide a question statement");
      return;
    } else if (possibleOptions.length < 4) {
      console.log("Please provide 4 possible options");
      return;
    } else if (!possibleOptions.includes(correctOption)) {
      console.log("Please select an option as correct option");
      return;
    }

    addMCQ({
      id: idToAssign,
      questionText: textRef.current.value,
      correctAnswer: correctOption,
      options: possibleOptions,
      maxScore: 1,
    });
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <Input
        inputRef={textRef}
        required={false}
        type="text"
        label="What would your question's statement be?"
        sx={{ width: "100%", mb: 2 }}
      />
      <Input
        inputRef={enterOptionRef}
        required={false}
        type="text"
        label="Add a possible option for your question"
        sx={{ width: "100%" }}
        handleKeyDown={handleKeyDown}
      />
      <Box sx={{ my: 3 }}>
        <Chips
          possibleOptions={possibleOptions}
          deletePossibleOption={deletePossibleOption}
          correctOption={correctOption}
          setAsCorrectOption={setAsCorrectOption}
        />
      </Box>
      <Button
        variant="contained"
        color="success"
        sx={{ width: "100%", mt: 5 }}
        onClick={handleSubmitMCQ}
      >
        ADD MCQ
      </Button>
    </Modal>
  );
};

export default AddMCQModal;
