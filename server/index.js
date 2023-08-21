const express = require("express");
const app = express();
const kekw = require("./routes/kekw");

app.use("/kekw", kekw);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
