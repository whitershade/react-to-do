import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import ToDo from './containers/ToDo'
import Deleted from './components/Deleted'

export const routes = (
  <div>
    <Route path="/" component={ App }>
      <IndexRoute component={ ToDo } />
      <Route path="deleted" component={ Deleted } />
    </Route>
  </div>
)
