import axios from 'axios'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// MessageBox
// import store from '../store'
// import router from '../router'
// 创建axios实例
const service = axios.create({
  timeout: 20000 // 请求超时时间
})

/**
 *有新的请求调用该方法，请求池数量+1，发出显示loading的事件
 */
// function AddRequest () {
//   REQUEST_POOL_SIZE += 1
//   store.dispatch('ToggleLayoutLoading', true)
// }
/**
 *请求结束，完成或者失败都要调用该方法，代表请求完成了一个，并且对请求池的剩余数量进项判断，小于0或者等于0的时候说明当前请求队列已经完成，发出隐藏loding的事件
 */
// function RemoveRequest () {
//   REQUEST_POOL_SIZE -= 1
//   if (REQUEST_POOL_SIZE <= 0) {
//     REQUEST_POOL_SIZE = 0
//     setTimeout(() => {
//       store.dispatch('ToggleLayoutLoading', false)
//     }, 300)
//   }
// }

// request拦截器
service.interceptors.request.use(
  config => {
    // var authInfo = getAuthInfo()
    // if (authInfo) {
    //   config.headers = Object.assign({}, config.headers, authInfo)
    // }
    // config.headers.joinType = getLocal('joinType')
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    // RemoveRequest()
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非1是抛错 可结合自己业务进行修改
     */
    // 隐藏loading
    // RemoveRequest()
    const res = response.data
    res.code = Number(res.code)
    if (res.code !== 1) {
      // 4002:非法的token; 4003 oken 过期了token验证失败
      // if (res.code === 4003 || res.code === 4004) {
      //   if (router.currentRoute.path !== '/login') {
      //     MessageBox.confirm(
      //       '你已被登出，可以取消继续留在该页面，或者重新登录',
      //       '确定登出',
      //       {
      //         confirmButtonText: '重新登录',
      //         cancelButtonText: '取消',
      //         type: 'warning'
      //       }
      //     ).then(() => {
      //       store.dispatch('FedLogOut').then(() => {
      //         location.reload() // 为了重新实例化vue-router对象 避免bug
      //       })
      //     })
      //   }
      // } else {
      //   // Message({
      //   //   showClose: true,
      //   //   message: res.desc,
      //   //   type: 'error',
      //   //   duration: 5 * 1000
      //   // })
      // }
      Message({
        showClose: true,
        message: res.desc,
        type: 'error',
        duration: 5 * 1000
      })
      return response.data
    } else {
      return response.data
    }
  },
  error => {
    // RemoveRequest()
    // Message({
    //   message: errorMsg,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
