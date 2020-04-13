/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import axios from 'axios'
import JSONbig from 'json-bigint'
import qs from 'qs'
import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const CODE = 'OK'
const instance = axios.create()

// axios 配置
instance.defaults.timeout = 360000
// instance.defaults.baseURL = '//api.gaga.live'
// instance.defaults.baseURL = '//192.168.130.9:8081';
instance.defaults.baseURL = '//testapi2.coinclub.global'
if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_FLAG === 'prod') {
    instance.defaults.baseURL = '//api.gaga.live';
  }
}
// instance.defaults.baseURL = '//api.gaga.live';
instance.defaults.headers.common.Test = 'test'
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.defaults.paramsSerializer = (params: any) => {
  return qs.stringify(params)
}

// 格式化提交参数
instance.defaults.transformRequest = [(params: any) => {
  if (!params) {
    return qs.stringify(params)
  }

  return qs.stringify(params)
}]

instance.defaults.transformResponse = [(params: any) => {
  return JSONbig.parse(params)
}]
// http request 拦截器
instance.interceptors.request.use((config: any) => {
  return config
}, (err: any) => {
  return Promise.reject(err)
})

// http response 拦截器
instance.interceptors.response.use(
  (response: { data: any; code: any; }) => {
    const { data } = response
    const { code } = response
    if (code === CODE) {
      const ret = data
      console.log('axios: respones', ret)
    }
    return data
  }, (error: any) => {
    console.log(error)
    return Promise.reject(error)
  })

export default instance;
