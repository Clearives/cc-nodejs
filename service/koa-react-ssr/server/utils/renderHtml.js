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
    <script type="text/javascript" src="/app.bundle.js"></script>
  </body>
  </html>
  `
}

export default renderHtml