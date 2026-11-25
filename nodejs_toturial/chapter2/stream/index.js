const fs = require("fs");
const streamFile = fs.createReadStream("./file.txt");

let chunkCount = 0;

streamFile.on("ready", () => console.log("data is ready to read"));

streamFile.on("data", (chunk) => {
  chunkCount++;
  console.log(`data chunk ${chunkCount} is received: `, chunk);
});

streamFile.on("error", (err) => console.log(err));

streamFile.on("end", (chunk) => console.log("read stream has been ended"));
