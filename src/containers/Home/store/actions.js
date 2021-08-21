import { CHANGE_HOME_LIST } from './constants'

export const getHomeList = () => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_HOME_LIST,
      list: [{
        id: '1',
        title: '1'
      }]
    })
  }
}