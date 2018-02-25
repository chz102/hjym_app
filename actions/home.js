export const REFRESH_HOMEPAGE = 'refreshHomePage' //刷新首页

const refreshHomePageAction = (data = {}) => {
    return {
        type: REFRESH_HOMEPAGE,
        data
    }
}

export const refreshHomePage = (dispatch, param) => {
    refreshHomePageTask(dispatch, param, refreshHomePageAction)
}