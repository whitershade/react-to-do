import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import * as actionsToDoItems  from '../../actions/ToDoAddNew'
import ToDoAddNew             from '../../components/ToDoAddNew'


 function mapDispatchToProps(dispatch) {
   return {
     dispatchToDoAddNew: bindActionCreators(actionsToDoItems, dispatch)
   }
 }

 export default connect(null, mapDispatchToProps)(ToDoAddNew)
