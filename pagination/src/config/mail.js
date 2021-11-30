const nodemailer =require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "5728b23bf067e4",
      pass: "a7bd592893c6ec",
    },
  });