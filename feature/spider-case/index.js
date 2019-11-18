var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
request("http://tianqi.moji.com/",
  function (err, res, body) {
    var $ = cheerio.load(body);
    var str = "";
    $(".days").each(function (i) {
      var day = $(this).children("li").eq(0).children('a').text();
      var wea = $(this).children("li").eq(1).text().replace(/\s*/g, '');
      var wea2 = $(this).children("li").eq(2).text().replace(/\s*/g, '');
      var wea3 = $(this).children("li").eq(3).text().replace(/\s*/g, '');
      var wea4 = $(this).children("li").eq(4).text().replace(/\s*/g, '');
      str += '😘  ' + day + ' : ' + wea + ',  ' + wea2 + ', ' + wea3 + ', ' + wea4 + '\r\n'
    })
    // console.log(str)
    fs.writeFile("data.txt", str, function (err) { 
    });
  });

  // todo 定时发送邮件提醒