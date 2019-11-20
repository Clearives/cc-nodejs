const path = require('path')
const file = '/code/github/cc-nodejs/learning/Path/index.js'

// console.log(path.dirname(file))
// console.log(path.basename(file))
// console.log(path.basename(file, '.js'))
// console.log(path.extname(file))

let pathStr = path.resolve('/foo/bar', './baz')
let pathStr2 = path.resolve('foo/bar', './baz')
let pathStr3 = path.resolve('foo/bar', '/../baz')
let pathStr4 = path.parse(file)
let pathStr5 = path.normalize('/foo/bar//baz/asdf/quux/..');

console.log(pathStr)  // /foo/bar/baz
console.log(pathStr2)  // 当前目录 + /foo/bar/baz
console.log(pathStr3)  // /baz
console.log(pathStr4)
console.log(pathStr5) // /foo/bar/baz/asdf


console.log( path.normalize('./..') )