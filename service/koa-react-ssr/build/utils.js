const path = require("path");
const resolve = (...arg) => path.join(__dirname, '..', ...arg);

exports.resolve = resolve;