const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhinabee9605@gmail.com',
    pass: 'okvxpirwucgmlvjp'
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailOptions = {
  from: 'abhinabee9605@gmail.com',
  to: 'lekhasivadasan02@gmail.com',
  subject: 'testing nodemailer',
  text: 'testing first nodemailer hi hello.'
};

transporter.sendMail(mailOptions, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Email sent');
  }
});
