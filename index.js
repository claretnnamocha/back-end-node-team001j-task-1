const http = require("http");
const port = 5000;

const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/":
      res.end("Hello World, welcome to WeJapa Internships");
      break;

    default:
      res.end("Invalid Request!");
      break;
  }
});

server.listen(port);

console.log(`App is running on http://localhost:${port}`);
