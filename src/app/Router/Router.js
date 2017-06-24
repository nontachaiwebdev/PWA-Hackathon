import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './../../screens/App'
import Board from './../../screens/Board'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Board} />
    <Route path='*' component={App} />
  </Route>
)

export default Routes
