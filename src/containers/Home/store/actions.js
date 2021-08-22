import { CHANGE_HOME_LIST } from './constants'

export const getHomeList = (resolve) => {
  return (dispatch) => {
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