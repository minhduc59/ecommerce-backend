const nodemailer = require("nodemailer");

const SendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smpt.gmail.com",
    port: 456,
    service: "gmail",
    auth: {
      user: "hoduc9504@gmail.com",
      pass: "05092004",
    },
  });
  const mailOptions = {
    from: "hoduc9504@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
module.exports = SendEmail;
