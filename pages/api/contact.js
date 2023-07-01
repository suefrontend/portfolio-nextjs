import nodemailer from "nodemailer";

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.NEXT_PUBLIC_GMAILUSER,
      pass: process.env.NEXT_PUBLIC_GMAILPASSWORD,
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

  await new Promise((resolve, reject) => {
    transporter.sendMail(toHostMailData, (err, info) => {
      if (err) {
        console.log("ERROR:", err);
        reject(err);
      } else {
        console.log("info", info);
        resolve(info);
      }
    });
  });

  return res.send("Success");
};
