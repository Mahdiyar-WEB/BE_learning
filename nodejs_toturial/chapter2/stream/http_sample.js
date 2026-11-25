const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    const readStreamFile = fs.createReadStream("./read.txt");
    res.writeHead(200, { "content-type": "text/plain" });
    readStreamFile.pipe(res);
  })
  .listen(3000, () =>
    console.log(
      "HTTP server is listening on port 3000 , http://localhost:3000",
    ),
  );
