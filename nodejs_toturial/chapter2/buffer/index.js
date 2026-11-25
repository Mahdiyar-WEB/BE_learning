//Buffer is a node js data type, its not module
let buff = Buffer.from("NodeJs");

console.log("🚀 ~ buff:", buff); //<Buffer 4e 6f 64 65 4a 73> array of HEX decimal
console.log("🚀 ~ buff:", buff[0]); //78 its N unicode in OS

console.log("N".charCodeAt(0)); //78 to check letter unicode

//** Buffer will divide N unicode (78) to 16 so the buffer value for N is 4e here its how works:
console.log("N".charCodeAt(0).toString(16)); //4e

// convert buffer to real value
console.log(buff.toString()); //NodeJs

const buff2 = Buffer.alloc(256); // create a buffer with 256 byte storage
buff2.write("Node js");
console.log("🚀 ~ buff2:", buff2); // <Buffer 4e 6f 64 65 20 6a 73 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 206 more bytes>

const buff3 = Buffer.from("erfan");
console.log(buff3.toJSON()); //{ type: 'Buffer', data: [ 101, 114, 102, 97, 110 ] }

const buff4 = Buffer.from([101, 114, 102, 97, 110], "hex");
console.log("🚀 ~ buff4:", buff4.toString("utf8")); // erfan
