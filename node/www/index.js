const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const moment = require('moment-timezone');

const dateTime = moment.tz("America/Monterrey").format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World - ' + dateTime);
});

server.listen(port, hostname, () => {
  console.log(`Running Server - http://${hostname}:${port}/`);
});