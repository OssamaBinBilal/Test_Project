import MuiChip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Chips({
  possibleOptions,
  deletePossibleOption,
  correctOption,
  setAsCorrectOption,
}) {
  return (
    <Stack direction="row" spacing={1}>
      {possibleOptions.map((option, index) => (
        <MuiChip
          key={index}
          label={option}
          color={option === correctOption ? "success" : "default"}
          variant={option === correctOption ? "filled" : "outlined"}
          onDelete={() => {
            deletePossibleOption(option);
          }}
          onClick={() => setAsCorrectOption(option)}
        />
      ))}
    </Stack>
  );
}
