import APP_ACTION from './../constants/app'
const initialState = {
  appData: {}
}
export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_ACTION.TEST:
      return {
        ...state,
        appData: action.data
      }
  }
}
