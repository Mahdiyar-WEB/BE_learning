const path = require("path");

//** Directory samples in linux, mac, windows:
// windows => C:\users\mahdiyar\...  */
// linux => apt/users/... */
// mac => apt/users/...  */

console.log("mongodb" + path.sep + "data" + path.sep + "users"); // mongodb\data\users
console.log("mongodb" + path.delimiter + "data" + path.delimiter + "users"); // mongodb;data;users in mac and linux: mongodb:data:users

console.log(path.basename("mongodb/data/user/index.html", ".html")); // index
console.log(path.dirname("mongodb/data/user/index.html")); // mongodb/data/user
console.log(path.extname("mongodb/data/user/index.html")); // .html
console.log(path.extname("index.html")); // .html
console.log(path.extname("video.mp4")); // .mp4
console.log(path.extname("picture.png")); // .png
