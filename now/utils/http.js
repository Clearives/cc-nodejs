import axios from 'axios'

//axios不支持jsonp请求,这个需要自己封装
axios.jsonp = (url) => {
    if (!url) {
        console.error('axios.jsonp 至少需要一个url参数!')
        return;
    }
    return new Promise((resolve, reject) => {
        window.jsonCallBack = (result) => {
            resolve(result)
        }
        var JSONP = document.createElement("script");
        JSONP.type = "text/javascript";
        JSONP.src = url + "&callback=jsonCallBack";
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        }, 500)
    })
}

/**
 * 暴露的核心方法
 * 主要options参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params data   {object}  post方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * 其他更多拓展参看axios自行拓展
 * 注意：options中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在options中带入
*/


export default (method, url, options) => {
    return new Promise((resolve, reject) => {
        typeof options !== 'object' && (options = {})
        let _option = options;
        _option = {
            method: method,
            url: url,
            baseURL: process.env.NODE_ENV === 'development' ? '/' : process.env.baseUrl,
            timeout: 30000,
            params: null,
            data: null,
            headers: null,
            withCredentials: true,
            validateStatus: (status) => {
                return status >= 200 && status < 300;
            },
            ..._option,
        }
        if (method.toLowerCase() === 'jsonp') {
            axios.jsonp(url).then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })
        } else {
            axios.request(_option).then(res => {
                resolve(typeof res.data == 'object' ? res.data : JSON.parse(res.data))
            }, error => {
                if (error.response) {
                    reject(error.response.data)
                } else {
                    reject(error)
                }
            })
        }
    })
}