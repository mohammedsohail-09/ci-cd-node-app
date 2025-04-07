// ECHO is on.
// index.js
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from Node.js App!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

