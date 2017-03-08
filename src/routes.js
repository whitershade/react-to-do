import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { rootPath, deletedPath} from './constans/Routes.js'

import App from './containers/App'
import ToDo from './containers/ToDo'
import Deleted from './containers/ToDoDeleted'

export const routes = (
  <div>
    <Route path={ rootPath } component={ App }>
      <IndexRoute component={ ToDo } />
      <Route path= { deletedPath} component={ Deleted } />
    </Route>
  </div>
)
