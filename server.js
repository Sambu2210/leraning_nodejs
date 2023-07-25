const fs = require("fs"); // fs means file system core module
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Learn about node.js</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><input type='submit' value='Send'></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log("chunk");
      console.log(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=");
      fs.writeFileSync("hello.txt", message[1]);
      fs.writeFileSync("hello.txt", "Dummy");
      console.log("parseBody");
      console.log(parseBody);
    });

    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>Learn about node.js</title></head>");
  res.write("<body><h1>Learn about node.js</h1></body>");
  res.write("</html>");
};
// module.exports = {
//   handler: requestHandler,
//   text: "this is server page",
// };
exports.handler = requestHandler;
exports.text = "this is server page";
