import { put, take, call, fork } from "redux-saga/effects"
import { FETCH_LOGIN } from "../constants/actionTypes"
import { GET } from "../../commons/utils/request"
import { LOGIN_URL } from "../constants/urls"
import { showLoading } from "../actions/base"
import { receiveLogin } from "../actions/login"

const PARAMS = {
  channel_id: "c7",
  cstart: 1,
  cend: 50,
  infinite: true,
  refresh: 1,
  __from__: "wap",
  multi: 5,
  appid: "web_yidian",
}
export function* handleLoginAction() {
  yield put(showLoading(true)) // 控制loading状态
    var resp = yield call(GET, LOGIN_URL, PARAMS)
    resp = {result:{access_token:'111'}};
  if (resp) {
    yield put(receiveLogin(resp.result.access_token))
  } else {
    yield put(receiveLogin({}))
  }
  yield put(showLoading(false))
}

export function* requestLoginTask() {
  while (true) {
    yield take(FETCH_LOGIN)
    yield fork(handleLoginAction)
  }
}

export function* watchLogin() {
  yield [call(requestLoginTask)]
}
