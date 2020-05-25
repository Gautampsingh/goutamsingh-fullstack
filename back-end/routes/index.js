var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");

var transport = {
  host: "mail.goutamsingh.com",
  // host: "smtp.ethereal.email",
  // secure: false,
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  const htmlEmail = `
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let mailOptions = {
    from: req.body.name,
    to: "goutamsi@goutamsingh.com",
    subject: "New Message from Goutamsingh.com",
    text: req.body.message,
    html: htmlEmail,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }

    console.log("Message sent: %s", data.message);
    console.log("Message sent: %s", nodemailer.getTestMessageUrl(data));
  });
});

module.exports = router;
