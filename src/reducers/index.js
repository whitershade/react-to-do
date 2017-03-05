import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import LeftMenu            from './LeftMenu'
import ToDoItems           from './ToDoItems'
import ToDoFilter          from './ToDoFilters'

export default combineReducers({
  routing: routerReducer,
  LeftMenu,
  ToDoItems,
  ToDoFilter
})
