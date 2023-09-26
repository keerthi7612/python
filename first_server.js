/*var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
    res.write("<h1>welcome to server side<h1>");
  })
  .listen(8080);
*/
/*
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end("welcome to server side");
  })
  .listen(8080);
*/

var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>hello world</h1>");
    res.end("welcome to server side");
  })
  .listen(8080);
