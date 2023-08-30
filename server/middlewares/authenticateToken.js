const jwt = require("jsonwebtoken");

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

module.exports = authenticateToken;
