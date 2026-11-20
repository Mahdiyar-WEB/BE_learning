// module.exports = "common js export default sample";

//export sample 1
// module.exports.add = (a, b) => a + b;
// module.exports.subtract = (a, b) => a - b;

//export sample 2
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract,
};
