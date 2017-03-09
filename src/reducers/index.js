import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import LeftMenu            from './LeftMenu'
import ToDoItems           from './ToDoItems'
import ToDoFilter          from './ToDoFilters'
import ToDoDeleted         from './ToDoDeleted'
import ToDoProgressBar     from './ToDoProgressBar'

export default combineReducers({
  routing: routerReducer,
  LeftMenu,
  ToDoItems,
  ToDoFilter,
  ToDoDeleted,
  ToDoProgressBar
})
