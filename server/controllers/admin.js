const nodemailer = require("nodemailer");
const Invitation = require("../models/invitation");

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

module.exports = {
  sendInvitation,
};
