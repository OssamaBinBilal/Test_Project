const express = require("express");
const app = express();
const studentsRouter = require("./routes/students");
const teacherRouter = require("./routes/teacher");

app.use(express.json());

app.use("/students", studentsRouter);
app.use("/teachers", teacherRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
