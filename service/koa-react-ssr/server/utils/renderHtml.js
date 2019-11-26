const renderHtml = (content) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app">${content}</div>
    <script type="text/javascript" src="/js/vendor.a7043774c20093adb399.js"></script><script type="text/javascript" src="/js/app.744688f4.bundle.js"></script>
  </body>
  </html>
  `
}

export default renderHtml