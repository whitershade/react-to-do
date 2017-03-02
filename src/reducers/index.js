import { combineReducers } from 'redux'

import LeftMenu            from './LeftMenu';
import ToDoItems           from './ToDoItems';
import ToDoFilter         from './ToDoFilters';

export default combineReducers({ LeftMenu, ToDoItems, ToDoFilter })
