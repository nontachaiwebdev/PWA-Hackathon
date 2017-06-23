import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './../../screens/App'

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={App} />
    <Route path='*' component={App} />
  </Route>
)

export default Routes
