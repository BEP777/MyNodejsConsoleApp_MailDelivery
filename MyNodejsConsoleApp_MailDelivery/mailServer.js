var nsHttp = require("http");
var nsUrl = require("url");
var nsPath = require("path");
var nsFs = require("fs");
var nodemailer = require('nodemailer');
var express = require("express");
var bodyParser = require("body-parser");

var srv = nsHttp.createServer(function (req, res) {
    var pathname = nsUrl.parse(req.url).pathname;
    console.log("path is "+pathname);
    console.log("exxxxxxxxxxxxxxxit");
    // check URL to send the right response
    switch (pathname) {
        case "/favicon.ico":
            res.end();
            break;

        case "/":
            HTTP_SendHtmlFile(res, nsPath.join(__dirname, "lessonsTrack.html"));
            break;

        case "/SaveLesson":
            console.log("click on save lesson server side");
            HTTP_SendOK(res, "");
            break;

        case "/SendMail":
            console.log("click on send mail server side");
            sendTheMailWithNodemailer();
            HTTP_SendOK(res, "");
            break;

        default:
            HTTP_SendNotFound(res);
            sendDateToFile(pathname);
    }
});


// reads a file contents and sends, but if any error occur,
// sends a 500 HTTP Status Code (Internal Server Error)
function HTTP_SendHtmlFile(res, filepath) {
    nsFs.readFile(filepath, function (err, data) {
        if (err) {
            HTTP_SendInternalServerError(res);
            return;
        }

        HTTP_SendOK(res, data);
    });
}

function HTTP_SendOK(res, body) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(body);
}

function HTTP_SendInternalServerError(res) {
    res.writeHead(500, { "Content-type": "text/html" });
    res.end();
}

function HTTP_SendNotFound(res) {
    //res.writeHead(404, { "Content-type": "text/html" });
    res.end();
}

function sendDateToFile(pathname) {
    //nsFs.appendFile('.\mailDetails\lessonsList.txt', pathname, function (err) {
    var path = './mailDetails/lessonsList.txt';
    nsFs.appendFile(path, pathname + "\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}


function sendTheMailWithNodemailer() {
    var pathToLessonsList = './mailDetails/lessonsList.txt';
    //title of the mail
    var subject = 'Lessons track - Avshalom Tam';
    //content of the mail
    var content = nsFs.readFileSync(pathToLessonsList, 'utf8');
    //adresses
    var mailFrom;
    var password;
    var mailTo;
    //reading adresses from files
    var pathToMailFrom = './mailDetails/mailFrom.txt';
    var pathToMailTo = './mailDetails/mailTo.txt';
    var contentsMailFrom = nsFs.readFileSync(pathToMailFrom, 'utf8');
    var contentsMailTo = nsFs.readFileSync(pathToMailTo, 'utf8');
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
        subject: subject,
        text: content
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

srv.listen(8080);