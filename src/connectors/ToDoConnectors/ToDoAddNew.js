import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import { addToDo }            from '../../actions/ToDoItems'
import ToDoAddNew             from '../../components/ToDoAddNew'


 function mapDispatchToProps(dispatch) {
   return {
     addToDo: bindActionCreators(addToDo, dispatch)
   }
 }

 export default connect(null, mapDispatchToProps)(ToDoAddNew)
