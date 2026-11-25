const fs = require("fs");

const data = "test text \n"; // \n for enter

//***
// writeFile is async function and its recommended for writeFile but if u need to process writeFile first then process other codes u should use writeFileSync */

// fs.writeFile("test.txt", data, (error) => {
//   error && console.log(error);
// });

// fs.writeFile("test.txt", data, { flag: "a", encoding: "utf-8" }, (error) => {
//   //third parameter is optional u can use flag:'a'(append) to add new content to existing file without delete the previous data
//   error && console.log(error);
// });

fs.writeFileSync("test.txt", data, { encoding: "utf-8", flag: "a" });
