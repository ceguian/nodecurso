/*
NPM is a package manager for Node.js packages, or modules if you like.

www.npmjs.com hosts thousands of free packages to download and use.

The NPM program is installed on your computer when you install Node.js

C:\Users\Your Name>npm install case 
*/

var http = require('http');
var uc = require('case');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upper("Hola Mundo"));
    res.end();
}).listen(8080);