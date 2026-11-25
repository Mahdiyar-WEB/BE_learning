const fs = require("fs");
const readStreamFile = fs.createReadStream("./read.txt");
const writeStreamFile = fs.createWriteStream("./write.txt");

let chunkCount = 0;

readStreamFile.on("ready", () => console.log("data is ready to read"));

readStreamFile.on("data", (chunk) => {
  chunkCount++;
  console.log(`data chunk ${chunkCount} is received: `, chunk);
  writeStreamFile.write(chunk);
});

readStreamFile.on("error", (err) => console.log(err));

readStreamFile.on("end", (chunk) => console.log("read stream has been ended"));
