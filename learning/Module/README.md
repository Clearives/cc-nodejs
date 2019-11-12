## nodejs模块使用

### CommonJS

```js
// a.js
module.exports = {
  a: 1
}

// main.js
const a1 = require('./a')

console.log(a1)
```

### 使用ES6模块

```bash
# babel
npm install babel-register babel-preset-env --D
```
启动脚本
```js
require('babel-register') ({
  presets: [ 'env' ]
})

module.exports = require('./main.js')
```

### 新特性node --experimental-modules

- Node 环境必须在 9.0以上
- 不加loader时候，使用import/export的文件后缀名必须为*.mjs（下面会讲利用Loader Hooks兼容*.js后缀文件）
- 启动必须加上flag --experimental-modules
- 文件的import和export必须严格按照ECMAScript Modules语法
- ECMAScript Modules和require()的cache机制不一样


