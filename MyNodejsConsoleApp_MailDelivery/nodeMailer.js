
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'saharhermon@gmail.com',
        pass: 'saharhermon1234'
    }
});

var mailOptions = {
    from: 'saharhermon@gmail.com',
    to: 'avitam444@gmail.com',
    subject: 'this is the subject', //this is the subject
    text: 'this is the content' //this is the inside od the mail
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});