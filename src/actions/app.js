import APP_ACTION from './../constants/app'

export const testReducer = (data) => {
  return {
    type: APP_ACTION.TEST,
    data: data
  }
}
