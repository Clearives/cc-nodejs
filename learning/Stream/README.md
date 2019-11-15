#

## 读流createReadStream
```js
var fs = require("fs")

var data = ''
var readStream = fs.createReadStream('input.txt')
readStream.setEncoding('UTF8')
readStream.on('data', (chunk) => {
  data += chunk
})
readStream.on('end',() => {
  console.log(data) // clearives.github.io是一个博客
})
readStream.on('error', (err) => {
  console.log(err.stack);
})
console.log("程序执行完毕")
```

## 写流createWriteStream
```js
var fs = require("fs")

var data = 'clearives.github.io是一个博客'
var writeStream = fs.createWriteStream('output.txt')
writeStream.write(data, 'utf-8')
writeStream.end()
writeStream.on('finish', () => {
  console.log('写入完成')
})
writeStream.on('error', (err) => {
  console.log('error', err);
})
console.log("程序执行完毕");
```
![20191114163054.png](https://i.loli.net/2019/11/14/T8uIWo7NmtC4BXe.png)

## 管道流pipe
```js
var fs = require("fs")

var readStream = fs.createReadStream('input.txt')
var writeStream = fs.createWriteStream('output.txt')
readStream.pipe(writeStream)
console.log("程序执行完毕")
```
执行node index.js，output.txt和input.txt一样。

## 链式流
链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
比如解压缩文件：
### 压缩文件
```js 
var fs = require("fs")
var zlib = require("zlib")

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.zip'))

console.log("程序执行完毕")
```
### 解压文件
```js
var fs = require("fs")
var zlib = require("zlib")

fs.createReadStream('input.txt.zip')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'))

console.log("程序执行完毕")
```