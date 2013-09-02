var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

app.get('/about', function(request, response) {
  var html = fs.readFileSync("screen-c3130a1371.html").toString();
  response.send(html);
});

app.get('/search', function (request, response) {
    var html = fs.readFileSync("screen-5672b7c194.html").toString();
    response.send(html);
});

app.get('/user', function (request, response) {
    var html = fs.readFileSync("screen-bae4a50ed5.html").toString();
    response.send(html);
});

app.get("css/screen-c3130a1371.css", function (request, response) {
    var css = fs.readFileSync("css/screen-c3130a1371.css").toString();
    response.send(css);
});

app.get("css/screen-bae4a50ed5.css", function (request, response) {
    var css = fs.readFileSync("css/screen-bae4a50ed5.css").toString();
    response.send(css);
});

app.get("css/screen-5672b7c194.css", function (request, response) {
    var css = fs.readFileSync("css/screen-5672b7c194.css").toString();
    response.send(css);
});

app.get("js/screen-5672b7c194.js", function (request, response) {
    var s = fs.readFileSync("js/screen-5672b7c194.js").toString();
    response.send(s);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
