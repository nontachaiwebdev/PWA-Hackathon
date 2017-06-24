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

export const startGetSprintDataById = () => {
  return {type: SPRINT_ACTION.FETCH_ITEM_BY_ID.START}
}

export const getSprintDataByIdSuccess = (data) => {
  return {type: SPRINT_ACTION.FETCH_ITEM_BY_ID.SUCCESS, data:data}
}

export const getSprintDataByIdFail = () => {
  return {type: SPRINT_ACTION.FETCH_ITEM_BY_ID.FAIL}
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

export const addNewSprintItem = (sprintItem) => (dispatch) => {
  dispatch(startAddNewSprint())
  const successHandler = () => {
    dispatch(addNewSprintSuccess())
  }

  const errorHandler = () => {
    dispatch(addNewSprintFail())
  }
  const userId = FireBase.auth().currentUser.uid;
  const FBSprintRef = FireBase.database().ref(`users/${userId}/sprints`)
  const FBNewSprintRef = FBSprintRef.push()
  FBNewSprintRef.set(sprintItem).then(successHandler).catch(errorHandler)
}

export const fetchSprintItems = () => (dispatch) => {
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

  const userId = FireBase.auth().currentUser.uid;
  const FBSprintRef = FireBase.database().ref(`users/${userId}/sprints`)
  FBSprintRef.on('value', successHandler, errorHandler)

}

export const getSprintDataById = (sprintId) => (dispatch) => {
  dispatch(startGetSprintDataById())
  const successHandler = (snapshot) => {
    const response = snapshot.val()
    dispatch(getSprintDataByIdSuccess(response))
  }

  const errorHandler = () => {
    dispatch(getSprintDataByIdFail())
  }

  const userId = FireBase.auth().currentUser.uid;
  const FBSprintRef = FireBase.database().ref(`users/${userId}/sprints/${sprintId}`)
  FBSprintRef.on('value', successHandler, errorHandler)
}
