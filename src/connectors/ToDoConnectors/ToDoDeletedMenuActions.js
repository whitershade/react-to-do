import { bindActionCreators }                from 'redux'
import { connect }                           from 'react-redux'

import { finallyDeleteRemovedToDoes }        from '../../actions/ToDoItems'
import { setFinallyDeleteDialogIsOpenState } from '../../actions/ToDoDeletedActionsDialogs'

import ToDoDeletedMenuActions                from '../../components/ToDoDeletedMenuActions'


function mapStateToProps(state) {
   return {
     stateFinallyDeleteDialogIsOpen: state.ToDoDeleted.finallyDeleteDialogIsOpen
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     setFinallyDeleteDialogIsOpenState: bindActionCreators(setFinallyDeleteDialogIsOpenState, dispatch),
     finallyDeleteRemovedToDoes: bindActionCreators(finallyDeleteRemovedToDoes, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ToDoDeletedMenuActions)
