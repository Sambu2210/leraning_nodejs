const http = require("http");

// function rqlistener(req, res) {
//   console.log(req);
// }
const server = http.createServer((req, res) => {
  console.log(res);
});

server.listen(3000);
