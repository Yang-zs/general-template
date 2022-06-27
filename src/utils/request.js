import axios from 'axios'
import loading from './loading'
import md5 from 'md5'
// Set config defaults when creating the instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    loading.open()
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    return config
  },
  function (error) {
    // 对请求错误做些什么
    loading.close()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    loading.close()
    return response
  },
  function (error) {
    loading.close()
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 处理get请求方式的参数问题
// function request(options) {
//   options.method = options.method || 'get'
//   if (options.method.toLowerCase() === 'get') {
//     options.params = options.data
//   }
//   return service(options)
// }
const request = (options) => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

// 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

export default request
