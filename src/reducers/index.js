import { combineReducers } from 'redux'
import app from './app'
import sprint from './sprint'

const rootReducer = combineReducers({
  app,
  sprint,
})

export default rootReducer
