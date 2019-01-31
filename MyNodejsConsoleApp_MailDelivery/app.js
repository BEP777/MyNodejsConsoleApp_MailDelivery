var http = require('http');
var fs = require('fs');
var url = require('url');
var events = require('events');
//var upper = require('node_modules/upper-case/upper-case.js');
var uc = require('upper-case');

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log("i hear a scream!");
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');


//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.write(uc("Hello World!"));
//    res.end();
//}).listen(8080);



////create the server
//http.createServer(function (req, res) {
//    //build the path to the right file that will will be sent to the client
//    //according to its request
//    var q = url.parse(req.url, true);
//    var filename = "." + q.pathname;
//   //read from the right file
//    fs.readFile(filename, function (err, data) {
//        if (err) {
//            res.writeHead(400, { 'Content-Type': 'text/html' }); 
//            return res.end("404 Not Found");
//        }
//        res.writeHead(200, { 'Content-Type': 'text/html' });
//        //send it to the client
//        res.write(data);
//        return res.end(); 
//    });
//}).listen(8080);

//create a file named mynewfile1.txt:
//fs.unlink('mynewfile1.txt', function (err) {
//fs.appendFile('mynewfile1.txt', 'this is update', function (err) {
//    if (err) throw err;
//    console.log('Saved!');
//});

