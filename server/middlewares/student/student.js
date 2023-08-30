const { isRegisteredAsStudent } = require("../../utils/admin");

const SECRET_KEY = "@#$%^&*()_-+=<>?";

const authorizeAsStudent = async (req, res, next) => {
  try {
    if (!(await isRegisteredAsStudent(req.user.email)))
      res.status(403).json({ error: "Unauthorized, not a student" });
    next();
  } catch (e) {
    console.error("Error authorizing admin:", error);
    res.status(403).json({ error: "Unauthorized, not a student" });
  }
};

module.exports = {
  authorizeAsStudent,
};
