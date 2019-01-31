var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

//create the server
http.createServer(function (req, res) {
    if (req.url == '/fileupload') { //if the client pushed on the send file button
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/avsha/workspace/' + files.filetoupload.name;
            //rename the file 
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        //send the html to the user
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
















//var eventEmitter = new events.EventEmitter();

////Create an event handler:
//var myEventHandler = function () {
//    console.log("i hear a scream!");
//}

////Assign the event handler to an event:
//eventEmitter.on('scream', myEventHandler);

////Fire the 'scream' event:
//eventEmitter.emit('scream');


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






//var http = require('http');
//var fs = require('fs');
//var url = require('url');
//var events = require('events');
//var uc = require('upper-case');
//var formidable = require('formidable');