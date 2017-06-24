import SPRINT_ACTION from './../constants/sprint'
const initialState = {
  sprintItems: [],
  sprintItem: {},
  isFetching: false,
  isFetchingSuccess: false,
  isFetchingItem: false,
  isFetchingItemSuccess: false,
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
      case SPRINT_ACTION.FETCH_ITEM_BY_ID.START:
        return {
          ...state,
          isFetchingItem: true
        }
      case SPRINT_ACTION.FETCH_ITEM_BY_ID.SUCCESS:
        return {
          ...state,
          sprintItem: action.data,
          isFetchingItem: false,
          isFetchingItemSuccess: true
        }
      case SPRINT_ACTION.FETCH_ITEM_BY_ID.FAIL:
        return {
          ...state,
          isFetchingItem: false,
          isFetchingItemSuccess: false
        }
    default:
      return state
  }
}
