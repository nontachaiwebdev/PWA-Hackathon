import APP_ACTION from './../constants/app'

export function testReducer(data) {
  return {
    type: APP_ACTION.TEST,
    data: data
  }
}
