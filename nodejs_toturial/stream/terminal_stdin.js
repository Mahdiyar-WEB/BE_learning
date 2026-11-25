const fs = require("fs");

const writeStreamFile = fs.createWriteStream("./stdin.txt");

process.stdin.pipe(writeStreamFile);
