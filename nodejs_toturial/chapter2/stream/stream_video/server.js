const http = require("http");
const fs = require("fs");

const filePath = "./dance.mp4";

http
  .createServer((req, res) => {
    const { size } = fs.statSync(filePath); // size in bytes
    const range = req.headers.range; //receive start and end range from header

    if (range) {
      let [start, end] = range.replace(/bytes=/, "").split("-");
      start = +start;
      end = end ? +end : size - 1;

      res.writeHead(206, {
        "content-type": "video/mp4",
        "accept-ranges": "bytes",
        "content-length": end - start + 1,
        "content-range": `bytes ${start}-${end}/${size}`,
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
    } else {
      const readVideoStream = fs.createReadStream(filePath);

      res.writeHead(200, {
        "content-type": "video/mp4",
        "content-length": size,
      });
      readVideoStream.pipe(res);
    }
  })
  .listen(3000, () =>
    console.log("video stream HTTP server has lunched: http://localhost:3000"),
  );
