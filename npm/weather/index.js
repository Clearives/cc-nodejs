#!/usr/bin/env node
'use strict';
const chalk = require('chalk')
const axios = require('axios')

const KEY = { ak: '986a362557a2e7a42cabeb4f9851b97b' }
const URL_IP = 'http://api.map.baidu.com/location/ip'
const URL_WEATHERR = 'http://api.map.baidu.com/telematics/v3/weather'
let getweatherParams = {
  location: '',
  output: 'json',
  ak: KEY.ak,
}

axios.get(URL_IP, {
      params: KEY
    }).then((result) => {
      getweatherParams.location = result.data.content.address_detail.city
      axios.get(URL_WEATHERR, {
        params: getweatherParams
      }).then(doc => {
        let wData = doc.data
        console.log(
          `城市: ${chalk.green(wData.results[0].currentCity)} ❤️\n` +
          `日期: ${chalk.green(wData.date)}\n` +
          `pm2.5: ${chalk.green(wData.results[0].pm25)}`
        )
        wData.results[0].weather_data.forEach(item => {
          console.log(
            `${item.date.slice(0, 2)}: ${chalk.green(item.weather)} | ${chalk.green(item.temperature)}`
          )
        }, this)
        console.log('')
      }).catch((err) => {
        console.log(chalk.red('服务异常', err.msg))
      });
    }).catch((err) => {
      console.log(chalk.red('服务异常', err.msg))
    });