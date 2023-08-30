const { isRegisteredAsAdmin } = require("../../utils/admin");

const SECRET_KEY = "@#$%^&*()_-+=<>?";

const authorizeAsAdmin = async (req, res, next) => {
  try {
    if (!(await isRegisteredAsAdmin(req.user.email)))
      res.status(403).json({ error: "Unauthorized, not an admin" });
    next();
  } catch (e) {
    console.error("Error authorizing admin:", error);
    res.status(403).json({ error: "Unauthorized, not an admin" });
  }
};

module.exports = {
  authorizeAsAdmin,
};
