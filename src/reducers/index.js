import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import AsideMenu           from './AsideMenu'
import ToDoItems           from './ToDoItems'
import ToDoFilter          from './ToDoFilters'
import ToDoDeleted         from './ToDoDeleted'
import ToDoProgressBar     from './ToDoProgressBar'

export default combineReducers({
  routing: routerReducer,
  AsideMenu,
  ToDoItems,
  ToDoFilter,
  ToDoDeleted,
  ToDoProgressBar
})
