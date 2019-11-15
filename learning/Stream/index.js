var fs = require("fs")
var zlib = require("zlib")

fs.createReadStream('input.txt.zip')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'))

console.log("程序执行完毕")