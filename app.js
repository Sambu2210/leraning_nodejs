const http = require("http");

// function rqlistener(req, res) {
//   console.log(req);
// }
const server = http.createServer((req, res) => {
  res.write("<html>");
  res.write("<head><title>Learn about node.js</title></head>");
  res.write("<body><h1>Learn about node.js</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
