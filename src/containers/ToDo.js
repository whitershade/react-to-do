import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AddToDoActions from '../actions/ToDo'
import ToDo from '../components/ToDo'

function mapStateToProps(state) {
   return {
     todos: state.ToDo
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     todosActions: bindActionCreators(AddToDoActions, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
