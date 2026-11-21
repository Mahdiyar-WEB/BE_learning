const fs = require("fs");
// console.log("readFile 1");

// fs.readFile("package.json", (err, data) => {
//   // readFile is async function
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(data); // it will return Buffer array which is good for IO performance
//     console.log(data.toString());
//   }
// });
// console.log("readFile 2");

console.log("-----------------------------------");
console.log("readFileSync 1");
const data = fs.readFileSync("package.json", 'utf-8');
console.log("🚀 ~ data:", data);
console.log("readFileSync 2");
