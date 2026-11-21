// instead of writeFile or writeFileSync we can use appendFile and appendFileSync
const fs = require("fs");

// fs.appendFile("test.txt", "appendFile test \n", "utf-8", (err) => {
//   err && console.log(err);
// });

// fs.appendFileSync("test.txt", "appendFile test \n", "utf-8", (err) => {
//   err && console.log(err);
// });

//***for delete file we can use fs.unlink or fs.unlinkSync

//check existing file
const existFile = fs.existsSync("test.txt");

// fs.unlink("test.txt", (err) => {
//   err && console.log(err);
// });

existFile &&
  fs.unlinkSync("test.txt", (err) => {
    err && console.log(err);
  });
