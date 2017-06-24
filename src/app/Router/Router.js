import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './../../screens/App'
import Board from './../../screens/Board'
import allBoard from './../../screens/allBoard'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={allBoard} />
    <Route path='*' component={App} />
  </Route>
)

export default Routes
