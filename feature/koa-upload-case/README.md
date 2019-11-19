# koa-upload

## koa-body
```js
app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024
  }
}))
```

## /api/upload
```js
Router.post('/upload', async (ctx, next) => {
  const file = ctx.request.files.file
  const readStream = fs.createReadStream(file.path)
  const writeStream = fs.createWriteStream(`${path.join(__dirname, "../../public/upload/")}${file.name}`)
  readStream.pipe(writeStream)
  ctx.body = {
    code: 200,
    path: `http://localhost:5000/upload/${file.name}`
  }
  await next()
})
```

## Api tester
![20191119164710.png](https://i.loli.net/2019/11/19/gde6uwYWhjREOXU.png)
![20191119164801.png](https://i.loli.net/2019/11/19/s1ukD4GtaIHWrVq.png)