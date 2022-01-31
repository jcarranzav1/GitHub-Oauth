const http = require('http');
const app = require('./server');
const fullDate = require('./server/config/date');
const config = require('./server/config');

const { port } = config;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(
    `server running in http://127.0.0.1:${port}/ server starts at ${fullDate}`,
  );
});
