export const checkLoginStateTask = (dispatch, param = {}, action) => {
    printf('checkLoginStateTask' + '_请求参数：', param)
    return new Promise((resolve, reject) => {
        resolve(initHomeData())
    }).then((res) => {
        printf('checkLoginStateTask' + '_请求结果：', res)
        dispatch(action(res))
    })
}

initHomeData = () => {
    return {
        status: 200,
        serverTime: new Date().valueOf()
    }
}