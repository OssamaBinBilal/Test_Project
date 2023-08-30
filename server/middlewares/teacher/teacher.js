const { isRegisteredAsTeacher } = require("../../utils/admin");

const SECRET_KEY = "@#$%^&*()_-+=<>?";

const authorizeAsTeacher = async (req, res, next) => {
  try {
    if (!(await isRegisteredAsTeacher(req.user.email)))
      res.status(403).json({ error: "Unauthorized, not a teacher" });
    next();
  } catch (e) {
    console.error("Error authorizing admin:", error);
    res.status(403).json({ error: "Unauthorized, not a teacher" });
  }
};

module.exports = {
  authorizeAsTeacher,
};
