import { combineReducers } from 'redux'
import app from './app'
import sprint from './sprint'
import card from './card'

const rootReducer = combineReducers({
  app,
  sprint,
  card
})

export default rootReducer
