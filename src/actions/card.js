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

export const fetchCardItems = (sprintKey) => (dispatch) => {
  dispatch(startFetchCardItems())
  const successHandler = (snapshot) => {

    const response = []
    snapshot.forEach(snap => {
      response.push({...snap.val(),id: snap.key})
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
