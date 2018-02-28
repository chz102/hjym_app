import * as types from "../constants/actionTypes"

export const DO_LOGIN = 'doLogin' //刷新首页

const doLoginAction = (data = {}) => {
    return {
        type: DO_LOGIN,
        data
    }
}

export const doLogin = (dispatch, param) => {
    doLoginTask(dispatch, param, refreshHomePageAction)
}

export function fetchLogin() {
  return {
    type: types.FETCH_LOGIN,
  }
}

export function receiveLogin(access_token) {
  return {
    type: types.RECEIVE_LOGIN,
      access_token,
  }
}


