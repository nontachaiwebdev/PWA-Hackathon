import SPRINT_ACTION from './../constants/sprint'
const initialState = {
  sprintItems: [],
  isFetching: false,
  isFetchingSuccess: false,
  isAdding: false,
  isAdddingSuccess: false
}
export default function app(state = initialState, action) {
  switch (action.type) {
    case SPRINT_ACTION.ADD_NEW_ITEM.START:
      return {
        ...state,
        isAdding: true
      }
    case SPRINT_ACTION.ADD_NEW_ITEM.SUCCESS:
      return {
        ...state,
        isAdding: false,
        isAdddingSuccess: true
      }
    case SPRINT_ACTION.ADD_NEW_ITEM.FAIL:
      return {
        ...state,
        isAdding: false,
        isAdddingSuccess: false
      }
    default:
      return state
  }
}
