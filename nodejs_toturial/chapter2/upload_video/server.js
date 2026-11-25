const { createWriteStream, mkdirSync } = require("fs");
const http = require("http");
const multiparty = require("multiparty");
const path = require("path");

mkdirSync("./upload", { recursive: true });

http
  .createServer((req, res) => {
    const { method, url } = req;

    if (url === "/" && method === "POST") {
      const form = new multiparty.Form(); // multiparty is a library for upload files through form with enctype="multipart/form-data"

      form.on("part", (part) => {
        if (!part.filename) {
          part.resume();
          return;
        }

        const filename = path.basename(part.filename);
        const writeStream = createWriteStream(path.join("./upload", filename));

        part.pipe(writeStream);
      });

      form.on("close", () => {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>File Uploaded Successfully</h1>");
      });

      form.on("error", (error) => {
        console.error(error);

        if (!res.headersSent) {
          res.writeHead(500);
          res.end("Upload Failed");
        }
      });

      form.parse(req); // start parsing video
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`
        <form enctype="multipart/form-data" method="POST" action="/">
          <input type="file" name="file" />
          <button type="submit">Upload file</button>
        </form>
      `);
    }
  })
  .listen(3000, () => console.log("Server running at http://localhost:3000"));
