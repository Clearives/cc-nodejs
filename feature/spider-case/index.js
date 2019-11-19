const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const SendEmail = require('./mail');

request("https://tianqi.moji.com/weather/china/guangdong/shenzhen",
  function (err, res, body) {
    var $ = cheerio.load(body);
    var str = "";
    var htmlStr = "";
    $(".days").each(function (i) {
      var day = $(this).children("li").eq(0).children('a').text();
      var wea = $(this).children("li").eq(1).text().replace(/\s*/g, '');
      var wea2 = $(this).children("li").eq(2).text().replace(/\s*/g, '');
      var wea3 = $(this).children("li").eq(3).text().replace(/\s*/g, '');
      var wea4 = $(this).children("li").eq(4).text().replace(/\s*/g, '');
      str += '😘  ' + day + ' : ' + wea + ',  ' + wea2 + ', ' + wea3 + ', ' + wea4 + '\r\n';
      htmlStr += '😘  ' + day + ' : ' + wea + ',  ' + wea2 + ', ' + wea3 + ', ' + wea4 + '<br/>';
    })
    htmlStr = '天气温馨提示：' + $('.wea_tips em').text() + '<br/><br/>' + htmlStr
    mailOptions = {
      from: "果粒奶优不好喝<704219713@qq.com>",
      to: '704219713@qq.com',
      subject: "天气小提醒",
      html: htmlStr
    }
    SendEmail(mailOptions);
    fs.writeFile("data.txt", str, function (err) { });
  });



  // todo 定时发送邮件提醒