import { bindActionCreators }                   from 'redux'
import { connect }                              from 'react-redux'

import * as ToDoDeletedActionsDialogsAcitons    from '../../actions/ToDoDeletedActionsDialogs'
import * as actionFinallyDeleteRemovedToDoes    from '../../actions/ToDoItems'
import ToDoDeletedMenuActions                   from '../../components/ToDoDeletedMenuActions'



function mapStateToProps(state) {
   return {
     stateFinallyDeleteDialogIsOpen: state.ToDoDeleted.finallyDeleteDialogIsOpen
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     dispatchSetFinallyDeleteDialogIsOpenState: bindActionCreators({ ...ToDoDeletedActionsDialogsAcitons, ...actionFinallyDeleteRemovedToDoes}, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ToDoDeletedMenuActions)
