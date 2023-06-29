import nodemailer from "nodemailer";

export default function sendGmail(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  const toHostMailData = {
    from: req.body.email, // from who
    to: "oyamakayano@gmail.com",
    subject: `${req.body.subject} [Portfolio Website]`,
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
      <p>Name:</p>
      <p>${req.body.name}</p>
      <p>Message:</p>
      <p>${req.body.message}</p>
      <p>Email:</p>
      <p>${req.body.email}</p>
    `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log("ERROR:", err);
    else {
      console.log("info", info);
    }
  });

  return res.send("Success");
}
