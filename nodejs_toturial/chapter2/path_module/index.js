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
console.log(path.join("/", "chapter2", "path_module", "index.js")); // it will create absolute path based on OS => \chapter2\path_module\index.js
console.log(
  path.isAbsolute(path.join("/", "chapter2", "path_module", "index.js")),
); // check path is absolute or not => true

console.log(path.parse("/chapter2/path_module/index.js"));
//{
//  root: '',
//  dir: '',
//  base: 'chapter2path_moduleindex.js',
//  ext: '.js',
//  name: 'chapter2path_moduleindex'
//}

console.log(path.normalize("/chapter2//path_module/\index.js")); // correct the path based on OS

console.log(__dirname); // C:\Users\jarob\Desktop\BE_learning\nodejs_toturial\chapter2\path_module

console.log(__filename); //C:\Users\jarob\Desktop\BE_learning\nodejs_toturial\chapter2\path_module\index.js
