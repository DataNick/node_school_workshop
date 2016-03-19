// code that will start a web server
//   var fs = require('fs');
//   var http = require('http');

//   http.createServer(function (request, response){

//     response.writeHead(200, {'Content-Type': 'text/html'});
//     var file = request.url.split('/').pop();
// // var text = fs.readFileSync('./pages/' + file + '.html', 'utf8');
//     var text = fs.readFileSync('./pages/home.html', 'utf8');
//     response.end(text);

//   }).listen(1337, '127.0.0.1');

//   console.log('Server is running at http://127.0.0.1:1337');

var express = require('express');
var app = express(); //define routes

app.get('/', function (request, response) {
  response.send('Hello World');
});

app.listen(3000);

//request cookies headers
//response has bunch of apis, html