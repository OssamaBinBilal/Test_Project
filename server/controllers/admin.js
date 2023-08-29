const nodemailer = require("nodemailer");
const Invitation = require("../models/invitation");
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "@#$%^&*()_-+=<>?";

const sendInvitation = async (req, res) => {
  const { email } = req.body;
  const token = Math.floor(100000 + Math.random() * 900000).toString();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sheikhusamabilal@gmail.com",
      pass: "kamransheikh",
    },
  });

  const mailOptions = {
    from: "sheikhusamabilal@gmail.com",
    to: email,
    subject: "Invitation to Join Our Application",
    text: `Hello,\n\nYou are invited to join our application. Your invitation token is: ${token}`,
  };

  console.log("GONNA SEND LMAO");

  try {
    // const invitation = await Invitation.create({
    //   email,
    //   token,
    //   expiresAt: new Date(),
    // });

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Invitation sent successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the invitation" });
  }
};

async function loginAdmin(req, res) {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ adminId: admin.id, email: email }, SECRET_KEY, {
      expiresIn: "15m",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function verifyToken(req, res) {
  res.status(200).json({ message: "Valid Token" });
}

module.exports = {
  sendInvitation,
  loginAdmin,
  verifyToken,
};
