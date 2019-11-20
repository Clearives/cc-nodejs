# path

## path.basename(path[, ext])
path.basename() 方法返回 path 的最后一部分，类似于 Unix 的 basename 命令
## path.dirname(path)
path.dirname() 方法返回 path 的目录名，类似于 Unix 的 dirname 命令
## path.extname(path)
path.extname() 方法返回 path 的扩展名，从最后一次出现 .（句点）字符到 path 最后一部分的字符串结束。 如果在 path 的最后一部分中没有 . ，或者如果 path 的基本名称（参阅 path.basename()）除了第一个字符以外没有 .，则返回空字符串

```js
const path = require('path')
const file = '/code/github/cc-nodejs/learning/Path/index.js'

console.log(path.dirname(file)) // /code/github/cc-nodejs/learning/Path
console.log(path.basename(file))  // index.js
console.log(path.basename(file, '.js'))  // index
console.log(path.extname(file)) // .js
```

## path.join([...paths])
path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
```js
let pathStr = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
console.log(pathStr)  // /foo/bar/baz/asdf
```

## path.resolve([...paths])
path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
```js
let pathStr = path.resolve('/foo/bar', './baz')
let pathStr2 = path.resolve('foo/bar', './baz')
console.log(pathStr)  // /foo/bar/baz
console.log(pathStr2)  // 当前目录 + /foo/bar/baz
```

## path.parse(path)
path.parse() 方法返回一个对象，其属性表示 path 的重要元素。 尾部的目录分隔符将被忽略
```js
let pathStr4 = path.parse(file)
{
  root: '/',
  dir: '/code/github/cc-nodejs/learning/Path',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
```

## path.normalize(path)
path.normalize() 方法规范化给定的 path，解析 '..' 和 '.' 片段。
```js
let pathStr5 = path.normalize('/foo/bar//baz/asdf/quux/..')  // /foo/bar/baz/asdf
```

- 如果路径为空，返回.，相当于当前的工作路径。
- 将对路径中重复的路径分隔符（比如linux下的/)合并为一个。
- 对路径中的.、..进行处理。（类似于shell里的cd ..）
- 如果路径最后有/，那么保留该/。


## 参考
- [http://nodejs.cn/api/path.html](http://nodejs.cn/api/path.html)