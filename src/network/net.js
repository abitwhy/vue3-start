/**
 * 我们的代码现在迫切需要一个简洁的动词来表示从网络服务器获取数据，就如同 get 和 set 表示读取和设置操作一样。目前值得考虑的词汇有（优先级顺序）：
 * 1. net 结网
 * 2. request(req) 请求
 * 3. fetch(fet?) 取来
 * 所以本模块命名为 net
 */

/**
 * [flyio http 请求库](https://github.com/wendux/fly/) | [flyio 文档](https://wendux.github.io/dist/#/doc/flyio/readme)
 * 优点：
 * - 可切换 Http Engine
 * - 常用请求方法的签名更易用：例如不区分 GET params（url 参数），使用与其它方法相同的 data 字段，屏蔽了它们的[差异](http://www.axios-js.com/zh-cn/docs/#:~:text=%60data%60%20%E6%98%AF%E4%BD%9C%E4%B8%BA%E8%AF%B7%E6%B1%82%E4%B8%BB%E4%BD%93%E8%A2%AB%E5%8F%91%E9%80%81%E7%9A%84%E6%95%B0%E6%8D%AE)
 * 缺点：
 * - 项目目前无人积极维护
 * - 因为请求库实例依赖上下文，而不支持解构和 ES Module 导出
 * - 拦截器的 response 参数中屏蔽了 status 字段
 */
// import reqLib from 'flyio'
import reqLib from 'axios' // 选用 axios 作为 http 请求库
import {
  request as requestInterceptor,
  response as responseInterceptor,
} from './intercept'

requestInterceptor && reqLib.interceptors.request.use(requestInterceptor)
responseInterceptor && reqLib.interceptors.response.use(responseInterceptor)

export default reqLib
export const {
  request: net,
  get,
  post,
  put,
  patch,
  // delete 方法是保留字，不予导出
} = reqLib
