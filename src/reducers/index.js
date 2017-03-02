import { combineReducers } from 'redux'

import LeftMenu            from './LeftMenu';
import ToDoItems           from './ToDoItems';
import ToDoFilters         from './ToDoFilters';

export default combineReducers({ LeftMenu, ToDoItems, ToDoFilters })
