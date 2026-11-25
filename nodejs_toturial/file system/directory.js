const fs = require("fs");

const directoryAddress = "new_directory/inner_directory";

//create new directory
// fs.mkdir(directoryAddress, (err) => {
//   err && console.log(err);
// });

//to prevent existing error or doesn't exist error we can use recursive flag with true value
fs.mkdir(directoryAddress, { recursive: true }, (err) => {
  err && console.log(err);
});

//also we can use mkdirSync
fs.mkdirSync(directoryAddress, { recursive: true }, (err) => {
  err && console.log(err);
});

//without recursive we should validate the path to prevent error
const isDirectoryExist = fs.existsSync(directoryAddress);

if (!isDirectoryExist) {
  fs.mkdir(directoryAddress, (err) => {
    err && console.log(err);
  });
} else {
  console.log("directory is already exist");
}

//read existing directories and files which is exist in selected directory
//*** it also have readdirSync
fs.readdir("./", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});

//delete directory or files
//**its also have rmSync
fs.rm(directoryAddress, { recursive: true }, (err) => {
  err && console.log(err);
});
