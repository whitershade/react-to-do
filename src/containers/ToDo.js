import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AddToDoActions from '../actions/ToDo'
import AddToDo from '../components/ToDo'

function mapStateToProps(state) {
   return {
     todos: state.AddToDo
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     todosActions: bindActionCreators(AddToDoActions, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(AddToDo)
