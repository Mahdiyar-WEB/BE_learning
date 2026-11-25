const os = require("os");

const currentOs = {
  type: os.type(), //OS name like => Windows_NT
  arch: os.arch(), // x64
  platform: os.platform(), // win32
  release: os.release(), // 10.0.26300
  version: os.version(), // Windows 11 Pro
  //   cpu_cores_list: os.cpus(),
  machine: os.machine(), // x86_64
};
console.log("🚀 ~ currentOs:", currentOs);

console.log("your system uptime is :", os.uptime() / 3600, "hours"); //get OS uptime

console.log(os.userInfo());
//{
//  uid: -1,
//  gid: -1,
//  username: 'jarob',
//  homedir: 'C:\\Users\\jarob',
//  shell: null
//}

console.log(os.totalmem() / 1e9); //16.87795712
console.log(os.freemem() / 1e9); //8.670806016

console.log(os.homedir()); // C:\Users\jarob
console.log(os.hostname()); // Mahdiyar
console.log(os.tmpdir()); // C:\Users\jarob\AppData\Local\Temp
