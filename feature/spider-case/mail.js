const nodemailer = require("nodemailer");
let config = {
  host: "smtp.qq.com",
  secure: true,
  port: 465,
  user: "704219713@qq.com",
  pass: ""
};
let transport = nodemailer.createTransport({
  host: config.host,
  secure: config.secure,
  port: config.port,
  auth: {
    user: config.user,
    pass: config.pass
  }
});
let sendMail = (option) => {
  transport.sendMail(option, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(response);
    }
    transport.close();
  });
}
module.exports = sendMail;


