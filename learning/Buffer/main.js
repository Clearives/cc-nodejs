/* const buf = Buffer.from('clearives', 'ascii')

console.log(buf)

console.log(buf.toString('base64')) */

/* let buf1 = Buffer.alloc(6);
console.log(buf1);
 
//指定数字进行填充
let buf2 = Buffer.alloc(6, 2);
console.log(buf2);
 
//也可以指定字符进行填充，第三个参数表示字符编码，默认为utf8
let buf3 = Buffer.alloc(6, 'a', 'utf8');
console.log(buf3); */

const http = require('http');

let hello = ''
for (var i = 0; i < 10240; i++) {
  hello += "s";
}

console.log(`Hello：${hello.length}`)
// hello = Buffer.from(hello);

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(hello);
}).listen(5000);
