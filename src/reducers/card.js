import CARD_ACTION from './../constants/card'
const initialState = {
  cardItems: [],
  isFetching: false,
  isFetchingSuccess: false,
  isAdding: false,
  isAdddingSuccess: false,
  isUpdate: false,
  isUpdateSuccess: false
}
export default function app(state = initialState, action) {
  switch (action.type) {
    case CARD_ACTION.ADD_NEW_ITEM.START:
      return {
        ...state,
        isAdding: true
      }
    case CARD_ACTION.ADD_NEW_ITEM.SUCCESS:
      return {
        ...state,
        isAdding: false,
        isAdddingSuccess: true
      }
    case CARD_ACTION.ADD_NEW_ITEM.FAIL:
      return {
        ...state,
        isAdding: false,
        isAdddingSuccess: false
      }
      case CARD_ACTION.UPDATE_ITEMS.START:
        return {
          ...state,
          isUpdate: true
        }
      case CARD_ACTION.UPDATE_ITEMS.SUCCESS:
        return {
          ...state,
          isUpdate: false,
          isUpdateSuccess: true
        }
      case CARD_ACTION.UPDATE_ITEMS.FAIL:
        return {
          ...state,
          isUpdate: false,
          isUpdateSuccess: false
        }
    case CARD_ACTION.FETCH_ITEMS.START:
      return {
        ...state,
        isFetching: true
      }
    case CARD_ACTION.FETCH_ITEMS.SUCCESS:
      return {
        ...state,
        cardItems: action.data,
        isFetching: false,
        isFetchingSuccess: true
      }
    case CARD_ACTION.FETCH_ITEMS.FAIL:
      return {
        ...state,
        isFetching: false,
        isFetchingSuccess: false
      }
    default:
      return state
  }
}
