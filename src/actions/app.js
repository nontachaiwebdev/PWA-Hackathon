import APP_ACTION from './../constants/app'
import firebase from 'firebase'

export const testReducer = (data) => {
  return {
    type: APP_ACTION.TEST,
    data: data
  }
}

export const loginAction = (data) => {
  return {
    type: APP_ACTION.CHECKLOGIN,
    data: data
  }
}

export const login = () => (dispatch) => {
  const provider = new firebase.auth.FacebookAuthProvider()
  firebase.auth().signInWithRedirect(provider).then(result => {
    dispatch(loginAction(true))
  }).catch(error => {
    dispatch(loginAction(false))
  })
}

export const logout = () => (dispatch) => {
  firebase.auth().signOut().then(function() {
    dispatch(loginAction(false))
  }).catch(function(error) {
    dispatch(loginAction(false))
  })
}

export const isLogin = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(loginAction(true))
    } else {
      dispatch(loginAction(false))
    }
  })
}
