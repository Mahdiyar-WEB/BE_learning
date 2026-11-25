const fs = require("fs");
const readStreamFile = fs.createReadStream("./read.txt");
const writeStreamFile = fs.createWriteStream("./write_pipe.txt");

readStreamFile.pipe(writeStreamFile);
