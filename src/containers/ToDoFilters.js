import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'

import * as ToDoFiltersActions  from '../actions/ToDoFilters'
import ToDoFilters              from '../components/ToDoFilters'


function mapStateToProps(state) {
   return {
     stateFilter: state.ToDoFilter
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     dispatchSetVisibilityFilter: bindActionCreators(ToDoFiltersActions, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ToDoFilters)
