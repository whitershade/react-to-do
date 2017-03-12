import { bindActionCreators }  from 'redux'
import { connect }             from 'react-redux'

import * as actionsToDoItems   from '../../actions/ToDoItems'
import * as progressBarActions from '../../actions/ToDoProgressBar'
import toDoItems               from '../../components/ToDoItems'

function mapStateToProps(state) {
   return {
     stateTodos: state.ToDoItems.filter(item => item.deleted === state.ToDoDeleted.DeletedToDoShow),
     stateFilter: state.ToDoFilter,
     stateShowDeleted: state.ToDoDeleted.DeletedToDoShow,
     stateProgressBarValue: state.ToDoProgressBar.value
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     dispatchToDoItems: bindActionCreators({ ...actionsToDoItems, ...progressBarActions  }, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(toDoItems)
