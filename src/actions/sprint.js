import SPRINT_ACTION from './../constants/sprint'
import FireBase from './../model/firebase'

export const startAddNewSprint = () => {
  return {type: SPRINT_ACTION.ADD_NEW_ITEM.START}
}

export const addNewSprintSuccess = () => {
  return {type: SPRINT_ACTION.ADD_NEW_ITEM.SUCCESS}
}

export const addNewSprintFail = () => {
  return {type: SPRINT_ACTION.ADD_NEW_ITEM.FAIL}
}

export const startFetchSprintItems = () => {
  return {type: SPRINT_ACTION.FETCH_ITEMS.START}
}

export const fetchSprintItemsSuccess = (data) => {
  return {type: SPRINT_ACTION.FETCH_ITEMS.SUCCESS, data: data}
}

export const fetchSprintItemsFail = () => {
  return {type: SPRINT_ACTION.FETCH_ITEMS.FAIL}
}

export const addNewSprintItem = (userId, sprintItem) => (dispatch) => {
  dispatch(startAddNewSprint())
  const successHandler = () => {
    dispatch(addNewSprintSuccess())
  }

  const errorHandler = () => {
    dispatch(addNewSprintFail())
  }

  const FBSprintRef = FireBase.ref(`users/${userId}/sprints`)
  const FBNewSprintRef = FBSprintRef.push()
  FBNewSprintRef.set(sprintItem).then(successHandler).catch(errorHandler)
}

export const fetchSprintItems = (userId) => (dispatch) => {
  dispatch(startFetchSprintItems())
  const successHandler = (snapshot) => {

    const response = []
    snapshot.forEach(snap => {
      response.push({...snap.val(),id: snap.key})
    })

    dispatch(fetchSprintItemsSuccess(response))
  }

  const errorHandler = () => {
    dispatch(fetchSprintItemsFail())
  }

  const FBSprintRef = FireBase.ref(`users/${userId}/sprints`)
  FBSprintRef.on('value', successHandler, errorHandler)

}
