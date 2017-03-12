import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { rootPath, deletedPath} from './constants/Routes.js'

import App   from './containers/App'
import Main  from './containers/Main'
import Trash from './containers/Trash'

export const routes = (
  <div>
    <Route path={ rootPath } component={ App }>
      <IndexRoute component={ Main } />
      <Route path= { deletedPath} component={ Trash } />
    </Route>
  </div>
)
