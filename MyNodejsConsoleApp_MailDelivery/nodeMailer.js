var fs = require('fs');
var nodemailer = require('nodemailer');

//content of the mail
var subject = 'sssssssssssssss';
var content = 'ccccccccccccccc';
//adresses
var mailFrom;
var password;
var mailTo;
//reading adresses from files
var pathToMailFrom = './mailDetails/mailFrom.txt';
var pathToMailTo = './mailDetails/mailTo.txt';
var contentsMailFrom = fs.readFileSync(pathToMailFrom, 'utf8');
var contentsMailTo = fs.readFileSync(pathToMailTo, 'utf8');
contentsMailFrom = contentsMailFrom.split('\n');
mailFrom = contentsMailFrom[0];
password = contentsMailFrom[1];
mailTo = contentsMailTo;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailFrom,
        pass: password
    }
});

var mailOptions = {
    from: mailFrom,
    to: mailTo,
    subject: subject , 
    text: content 
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});