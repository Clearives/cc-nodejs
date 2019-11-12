
/* 
在 node 的 js 模块里可以直接调用 exports 和 module 两个“全局”变量，但是 exports 是 module.exports 的一个引用。
module.exports 初始值为一个空对象 {}
exports 是指向的 module.exports 的引用
require() 返回的是 module.exports 而不是 exports
*/

const a1 = require('./a')

console.log(a1)