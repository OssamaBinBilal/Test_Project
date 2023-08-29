const jwt = require("jsonwebtoken");
const { isRegisteredAsAdmin } = require("../../utils/admin");

const SECRET_KEY = "@#$%^&*()_-+=<>?";

const authenticateToken = async (req, res, next) => {
  if (!req.header("Authorization")) {
    return res.status(401).json({ error: "Access denied, no token provided" });
  }

  const token = req.header("Authorization").split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(403).json({ error: "Invalid token" });
  }
};

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
  authenticateToken,
  authorizeAsAdmin,
};
