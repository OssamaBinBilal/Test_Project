const express = require("express");
const app = express();
const studentsRouter = require("./routes/students");
const teacherRouter = require("./routes/teacher");
const adminRouter = require("./routes/admin");

app.use(express.json());

app.use("/students", studentsRouter);
app.use("/teacher", teacherRouter);
app.use("/admin", adminRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
