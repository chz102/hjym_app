import { createSelector } from "reselect"

const getLoading = state => {
  const { loading } = { ...state.base }
  return loading
}

const hasImage = item => {
  return item.image && item.image.indexOf("http:") >= 0
}

const listData = item => {
  const MyItem = { ...item }
  MyItem.image =
    MyItem.image.indexOf("https") < 0 ? MyItem.image.replace("http", "https") : MyItem.image
  MyItem.url = MyItem.url.indexOf("https") < 0 ? MyItem.url.replace("http", "https") : MyItem.url
  return {
    key: MyItem.itemid,
    data: [{ ...MyItem }],
  }
}

const getAccessToken = state => {
    const {access_token} = {...state.login}
    // const filterJunShi = junshi.filter(hasImage).map(listData)
    return access_token
}

export default createSelector(getLoading, getAccessToken, (loading, access_token) => {
    return {
        loading,
        access_token,
    }
})
