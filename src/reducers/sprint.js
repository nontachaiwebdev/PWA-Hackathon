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
    case SPRINT_ACTION.FETCH_ITEMS.START:
      return {
        ...state,
        isFetching: true
      }
    case SPRINT_ACTION.FETCH_ITEMS.SUCCESS:
      return {
        ...state,
        sprintItems: action.data,
        isFetching: false,
        isFetchingSuccess: true
      }
    case SPRINT_ACTION.FETCH_ITEMS.FAIL:
      return {
        ...state,
        isFetching: false,
        isFetchingSuccess: false
      }
    default:
      return state
  }
}
