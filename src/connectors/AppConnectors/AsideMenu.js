import { bindActionCreators }      from 'redux'
import { connect }                 from 'react-redux'

import * as AsideMenuActions       from '../../actions/AsideMenu'
import AsideMenu                   from '../../components/AsideMenu'


function mapStateToProps(state) {
   return {
     stateIsOpen: state.AsideMenu.isOpen,
     stateRouting: state.routing.locationBeforeTransitions
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     AsideMenuActions: bindActionCreators(AsideMenuActions, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu)
