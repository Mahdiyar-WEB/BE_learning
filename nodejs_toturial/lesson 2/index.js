//Modules
//Es module => import, export , export default
//CommonJS module (default) => require , module.exports.testFunction = , module.exports =
//in commonJS we cant user export default and export together but in es module we can
//to change compiler module we should change type in package.json

// export default sample
// const commonJSModule = require("./commonjs_module");
// console.log("🚀 ~ commonJSModule:", commonJSModule);

// export sample
const { add, subtract } = require("./commonjs_module");
console.log("🚀 ~ add:", add(2, 5));
console.log("🚀 ~ subtract:", subtract(2, 5));
