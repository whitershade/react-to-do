import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import * as actionsToDoItems  from '../actions/ToDoItems'
import toDoItems              from '../components/ToDoItems'


function mapStateToProps(state) {
   return {
     stateTodos: state.ToDoItems,
     stateFilter: state.ToDoFilters
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     dispatchToDoItems: bindActionCreators(actionsToDoItems, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(toDoItems)
