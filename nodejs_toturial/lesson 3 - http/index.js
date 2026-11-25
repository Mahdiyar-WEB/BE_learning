// http module to create http server
const http = require("http");

http
  .createServer((req, res) => {
    // console.log(req);
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("sample response with http status code 200");
  })
  .listen(3000, () => { //we should use port number between 1000 to 9000
    console.log(
      "http server is listening from port 3000 and u can run it in http://localhost:3000",
    );
  });
