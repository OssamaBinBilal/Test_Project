const express = require("express");
const app = express();
const kekw = require("./routes/kekw");
const createDatabase = require("./scripts/createDatabase");

const { faker } = require("@faker-js/faker");

// createDatabase().then(() => {
//   console.log("Database created");
// });

app.use(express.json());

app.use("/kekw", kekw);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
