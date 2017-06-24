import SPRINT_ACTION from './../constants/sprint'
import FireBase from './../model/firebase'

export const startAddNewSprint = () => {
  return {
    type: SPRINT_ACTION.ADD_NEW_ITEM.START,
  }
}

export const addNewSprintSuccess = () => {
  return {
    type: SPRINT_ACTION.ADD_NEW_ITEM.SUCCESS,
  }
}

export const addNewSprintFail = () => {
  return {
    type: SPRINT_ACTION.ADD_NEW_ITEM.FAIL,
  }
}

export const addNewSprintItem = (userId,sprintItem) => (dispatch) => {
  dispatch(startAddNewSprint())
  const successHandler = () => {
    dispatch(addNewSprintSuccess())
  }

  const errorHandler = () => {
    dispatch(addNewSprintFail())
  }

  const FBSprintRef = FireBase.ref(`users/${userId}/sprints`)
  const FBNewSprintRef = FBSprintRef.push()
  FBNewSprintRef.set(sprintItem)
  .then(successHandler)
  .catch(errorHandler)

}
