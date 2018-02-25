import { checkLoginStateTask } from "../tasks/my"

export const CHECK_LOGIN_STATE = 'checkLoginState' //刷新首页

const checkLoginStateAction = (data = {}) => {
    return {
        type: CHECK_LOGIN_STATE,
        data
    }
}

export const checkLoginState = (dispatch, param) => {
    checkLoginStateTask(dispatch, param, checkLoginStateAction)
}
