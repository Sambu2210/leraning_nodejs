const http = require("http");

const routes = require("./server");
console.log(routes.text);

const server = http.createServer(routes.handler);

server.listen(3000);
