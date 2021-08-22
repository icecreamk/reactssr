import { CHANGE_HOME_LIST } from './constants'

export const getHomeList = (server) => {
  return (dispatch) => {

    // 由于
    // http://host.com/v1.0/api/new
    // 浏览器运行
    // /api/new = http://localhost:3000/api/new
    // 服务器运行
    // /api/new = 服务器根目录下/api/new

    // 因此
    // if (server) {
    //   return axios.get('http://host.com/v1.0/api/new')
    // } else {
    //   // 使用proxy 代理
    //   return axios.get('/api/new')
    // }
    return new Promise((resolve) => {
      setTimeout(() => {
        const list = [{
          id: '1',
          title: '1'
        }]
        dispatch({
          type: CHANGE_HOME_LIST,
          list
        })
        resolve()
      }, 1000)
    })
  }
}