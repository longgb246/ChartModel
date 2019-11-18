import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 20000

axios.interceptors.request.use( config => {
  const { method, data, headers } = config
  const { needToken } = headers
  if (method.toUpperCase() === 'POST' && data && typeof data === 'object') {
    //qs将｛｝转化为urlencoded编码的字符串
    config.data = qs.stringify(data)
  }
  
  //根据needToken标识来决定是否需要携带token发请求
  if (needToken) {
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = token
    } else {
      const error = new Error('没有授权的身份')
      error.status = 401
      throw error
    }
  } 
  return config
})

axios.interceptors.response.use( response => {
  return response.data
}, error => {
 

  if (!error.response) {
    if (error.status === 401) {
      if (router.currentRoute.path !== '/login') {
        router.replace('/login')
        Toast(error.message)
      }
    }
  } else {
    const status = error.response.status
    const msg = error.response.msg
    if (status === 401) {
      store.dispatch('logout')
      router.replace('/login')
    } else if (status === 404) {
      Toast('资源不存在')
    } else {
      Toast('请求异常' + msg)
    }
  }
  return new Promise(()=>{})
  
})

export default axios