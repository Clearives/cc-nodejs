# mongoose在node下的使用

## 连接
```js
mongoose.connect('mongodb://localhost:27017/jwt', {
  useCreateIndex: true,
  useNewUrlParser:true,
  useFindAndModify:false, 
  useUnifiedTopology: true
}).then(() => {
  console.log(`✅  Mongodb is Connected.Please have a great coding.`);
})
```

## Schema
```js
const urlSchema = new Schema({
    urlCode: String,
    longUrl: String
})
```
### SchemaTypes
- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
### 实例方法（method）
documents 是 Models 的实例。 Document 有很多自带的实例方法， 当然也可以自定义我们自己的方法。
加在 schema methods 属性的函数会编译到 Model 的 prototype， 也会暴露到每个 document 实例。
### 静态方法（static）
> 不要在自定义方法和静态方法中使用 ES6 箭头函数，会造成 this 指向错误

## model
```js
export default mongoose.model("Url", urlSchema)
```

### 增——Model.create()
> 下面可能是代码片段，不能直接copy
```js
const res = await UrlModel.create(options);
```
### 删——Model.remove() & Model.deleteOne() & Model.deleteMany()
```js
const res1 = await UrlModel.remove(options);
const res2 = await UrlModel.deleteOne(options);
const res3 = await UrlModel.deleteMany(options);

```
### 改——Model.update() & Model.updateMany() & Model.updateOne()

### 查——Model.find() & Model.findById() & Model.findOne() & Model.where()
```js
const res1 = await UrlModel.find(options);
const res2 = await UrlModel.findById(id);
const res3 = await UrlModel.findOne(options);
// Model.where()与find类似
```