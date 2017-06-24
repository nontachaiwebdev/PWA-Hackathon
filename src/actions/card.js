import CARD_ACTION from './../constants/card'
import FireBase from './../model/firebase'

export const startAddNewCard = () => {
  return {type: CARD_ACTION.ADD_NEW_ITEM.START}
}

export const addNewCardSuccess = () => {
  return {type: CARD_ACTION.ADD_NEW_ITEM.SUCCESS}
}

export const addNewCardFail = () => {
  return {type: CARD_ACTION.ADD_NEW_ITEM.FAIL}
}

export const startFetchCardItems = () => {
  return {type: CARD_ACTION.FETCH_ITEMS.START}
}

export const fetchCardItemsSuccess = (data) => {
  return {type: CARD_ACTION.FETCH_ITEMS.SUCCESS, data: data}
}

export const fetchCardItemsFail = () => {
  return {type: CARD_ACTION.FETCH_ITEMS.FAIL}
}

export const startUpdateCard = () => {
  return {type: CARD_ACTION.UPDATE_ITEMS.START}
}

export const updateCardSuccess = () => {
  return {type: CARD_ACTION.UPDATE_ITEMS.SUCCESS}
}

export const updateCardFail = () => {
  return {type: CARD_ACTION.UPDATE_ITEMS.FAIL}
}


export const addNewCardItem = (sprintKey,cardItem) => (dispatch) => {
  dispatch(startAddNewCard())
  const successHandler = () => {
    dispatch(addNewCardSuccess())
  }

  const errorHandler = () => {
    dispatch(addNewCardFail())
  }
  const userId = FireBase.auth().currentUser.uid;
  const FBCardRef = FireBase.database().ref(`users/${userId}/sprints/${sprintKey}/cards`)
  const FBNewCardRef = FBCardRef.push()
  FBNewCardRef.set(cardItem).then(successHandler).catch(errorHandler)
}

export const updateCardItem = (sprintKey, cardId, updateData) => (dispatch) => {
  dispatch(startUpdateCard())
  const successHandler = () => {
    dispatch(updateCardSuccess())
  }

  const errorHandler = () => {
    dispatch(updateCardFail())
  }
  const userId = FireBase.auth().currentUser.uid;
  const FBCardRef = FireBase.database().ref()
  const updates = {}
  updates[`users/${userId}/sprints/${sprintKey}/cards/${cardId}`] = updateData;
  const FBNewCardRef = FBCardRef.push()
  FBNewCardRef.update(updates).then(successHandler).catch(errorHandler)
}

export const fetchCardItems = (sprintKey) => (dispatch) => {
  dispatch(startFetchCardItems())
  const successHandler = (snapshot) => {

    const response = {
      todo:[],
      doing:[],
      done: []
    }
    snapshot.forEach(snap => {
      const item = snap.val()
      const status = item.status
      switch (status) {
        case "doing":
          response.doing.push({...snap.val(),id: snap.key})
          break;
        case "done":
          response.done.push({...snap.val(),id: snap.key})
          break;
        default:
          response.todo.push({...snap.val(),id: snap.key})
          break;
      }
    })

    dispatch(fetchCardItemsSuccess(response))
  }

  const errorHandler = () => {
    dispatch(fetchCardItemsFail())
  }

  const userId = FireBase.auth().currentUser.uid;
  const FBCardRef = FireBase.database().ref(`users/${userId}/sprints/${sprintKey}/cards`)
  FBCardRef.on('value', successHandler, errorHandler)

}
