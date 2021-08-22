import { CHANGE_HOME_LIST } from './constants'
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'

export const getHomeList = (server) => {
  return (dispatch) => {

    // 由于
    // http://host.com/v1.0/api/new
    // 浏览器运行
    // /api/new = http://localhost:3000/api/new
    // 服务器运行
    // /api/new = 服务器根目录下/api/new

    // 因此
    // let request = null
    // if (server) {
    //  http://host.com/v1.0/api/new
    //  request = serverAxios
    // } else {
    //  /api/new
    //  request = clientAxios
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