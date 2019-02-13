var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    //var q = url.parse(req.url, true);
    //var filename = "." + q.pathname;
    //var filename = "./lessons_track.html";
    var filename = "./summer.html";
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //the html file
        res.write(data);
        //the buttons
        //res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        //res.write('<input type="file" name="filetoupload"><br>');
        //res.write('<input type="submit">');
        //res.write('</form>');
        return res.end();
    });
}).listen(8080);