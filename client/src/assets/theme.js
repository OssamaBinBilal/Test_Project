import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
  palette: {
    customGrey: { main: "#474350" },
    customBlue: { main: "#9Dacff" },
    customRed: { main: "#ff1053" },
    customZinc: { main: "#052424" },
    customGreen: { main: "#0bfe7d" },
    white: { main: "#FFF" },
    black: { main: "#000" },
    lightGrey: { main: "#f5f5f5" },
    darkGrey: { main: "#a3a3a3" },
  },
});

export default theme;
