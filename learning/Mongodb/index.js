const mongoClient = require('mongodb').MongoClient;
const sqlUrl = 'mongodb://localhost:27017/'

mongoClient.connect(sqlUrl, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err;
  console.log('connect success~');
  const dbase = db.db("test");
  const page = 2;
  const limit = 2;

  dbase.collection('node').find().skip(page * limit).limit(limit).sort({'_id': -1}).toArray((err, result) => {
    console.log("find success~");
    console.log(result)
  })
});