import APP_ACTION from './../constants/app'
const initialState = {
  appData: {},
  isLogin: false
}
export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_ACTION.TEST:
      return {
        ...state,
        appData: action.data
      }
    case APP_ACTION.CHECKLOGIN:
      return {
        ...state,
        isLogin: action.data
      }
    default:
      return state
  }
}
