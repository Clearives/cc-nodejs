# mongoose 在 node 下的使用

## 连接

```js
mongoose
  .connect("mongodb://localhost:27017/jwt", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`✅  Mongodb is Connected.Please have a great coding.`);
  });
```

## Schema

```js
const urlSchema = new Schema({
  urlCode: String,
  longUrl: {
    type: String,
    required: true // 校验
  },
  used: {
    type: Boolean,
    default: true // 默认值
  }
});
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
export default mongoose.model("Url", urlSchema);
```

### 增——Model.create()

> 下面可能是代码片段，不能直接 copy

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

## Queries 查询

```
$or　　　　或关系
$nor　　　 或关系取反
$gt　　　　大于
$gte　　　 大于等于
$lt　　　　小于
$lte　　　 小于等于
$ne       不等于
$in       在多个值范围内
$nin      不在多个值范围内
$all      匹配数组中多个值
$regex　　 正则，用于模糊查询
$size　　　 匹配数组大小
$maxDistance　　范围查询，距离（基于LBS）
$mod　　   取模运算
$near　　　 邻域查询，查询附近的位置（基于LBS）
$exists　　 字段是否存在
$elemMatch　　匹配内数组内的元素
$within　　范围查询（基于LBS）
$box　　　 范围查询，矩形范围（基于LBS）
$center       范围醒询，圆形范围（基于LBS）
$centerSphere　　范围查询，球形范围（基于LBS）
$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素）
```

## Populate（填充）

Population 可以自动替换 document 中的指定字段，替换内容从其他 collection 获取。 我们可以填充（populate）单个或多个 document、单个或多个纯对象，甚至是 query 返回的一切对象。

```js
const urlSchema = new Schema({
    urlCode: String,
    longUrl: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

async findOne(options) {
    try {
      const res = await this._model.findOne(options).populate({
        path: 'author',
        select: 'mobile -_id'
      }).exec()
      return res
    } catch (e) {
      throw e
    }
  };
```

## aggregate 聚合管道

```js
async findByAggregate(options) {
    try {
      const res = await this._model.aggregate([
        {
          $lookup:
          {
            from: 'users',
            localField: 'author',
            foreignField: '_id',
            as: 'users'
          }
        },
        {
          $match: { longUrl: options.longUrl }
        }
      ]).exec()
      return res
    } catch (e) {
      throw e
    }
  };
```

## plugin（插件）

Schema 是可拓展的，你可以用打包好的功能拓展你的 Schema

```js
export default schema => {
  schema.options.toObject = schema.options.toJSON = {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret.__v;
      delete ret._id;
    }
  };
};
// use
urlSchema.plugin(plugin);
```

## 参考
- [populate-vs-aggregate](https://stackoverflow.com/questions/55575806/mongoose-populate-vs-aggregate)
![20191130193830.png](https://i.loli.net/2019/11/30/aYU7GycBbF1APKM.png)