const express = require("express");
const router = express.Router();
const {
  getAdmin,
  postAdmin,
  putAdmin,
  deleteAdmin,
} = require("../controllers/admin");

router.get("/", getAdmin);
router.post("/", postAdmin);
router.put("/", putAdmin);
router.delete("/", deleteAdmin);

module.exports = router;
