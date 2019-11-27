# node 操作 mongodb 知识梳理

## createCollection-创建集合

```js
dbase.createCollection("node", function(err, res) {
  if (err) throw err;
  console.log("createCollection success~");
});
```

## 数据库操作( CURD )

### 新增

```js
let obj = {
  name: "clearives",
  age: "28"
};
let obj2 = [
  {
    name: "clearives",
    age: "28"
  },
  {
    name: "clearives2",
    age: "18"
  }
];
dbase.collection("node").insertOne(obj, (err, res) => {
  console.log("insertOne success~");
});
dbase.collection("node").insertMany(obj2, (err, res) => {
  console.log("insertMany success~");
  console.log(res.insertedCount); // 2
});
```

![20191126165230.png](https://i.loli.net/2019/11/26/rBfpGhFToi59xUD.png)

### 查询

```js
dbase.collection("node").find({ age: "18" }).toArray((err, result) => {
    console.log("find success~");
    console.log(result);
  });
```
### 更新
updateOne && updateMany


### 删除
deleteOne && deleteMany
```js
dbase.collection('node').deleteOne({ age: '18' }, (err, res) => {
  console.log("deleteOne success")
  console.log(res)
})
```

### 分页、排序
skip && limit && sort
```js
const page = 2;
const limit = 2;

dbase.collection('node').find().skip(page * limit).limit(limit).sort({'_id': -1}).toArray((err, result) => {
  console.log("find success~");
  console.log(result)
})
```