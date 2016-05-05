require('babel-core/register');

var app = require('../app');
var http = require('http');

var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
console.log(`Start Listen Port ${port}`);
