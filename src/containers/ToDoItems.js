import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import * as ToDoItemsActions  from '../actions/ToDoItems'
import ToDoItems              from '../components/ToDoItems'


function mapStateToProps(state) {
  console.log(state);
   return {
     todos: state.ToDoItems
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     todosActions: bindActionCreators(ToDoItemsActions, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ToDoItems)
