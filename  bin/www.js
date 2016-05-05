require('babel-core/register');

let app = require('../app');
let http = require('http');

let port = process.env.PORT || '3000';
app.set('port', port);

let server = http.createServer(app);

server.listen(port);
console.log(`Start Listen Port ${port}`);
