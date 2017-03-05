import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LeftMenuActions from '../actions/LeftMenu'
import leftMenu from '../components/LeftMenu'

function mapStateToProps(state) {
   return {
     isOpen: state.LeftMenu.isOpen,
     routing: state.routing.locationBeforeTransitions
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     LeftMenuActions: bindActionCreators(LeftMenuActions, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(leftMenu)
