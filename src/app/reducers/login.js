import { handleActions } from "redux-actions"
import * as types from "../constants/actionTypes"

const initialState = {
    access_token: null,
}

const handler = {}

handler[types.RECEIVE_LOGIN] = (state, action) => {
  const { access_token } = action;
  return {
    ...state,
      access_token,
  }
}

export default handleActions(handler, initialState)
