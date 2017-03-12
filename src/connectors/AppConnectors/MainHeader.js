import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AsideMenuActions  from '../../actions/AsideMenu'
import MainHeader             from '../../components/MainHeader'

function mapStateToProps(state) {
   return {
     isOpen: state.AsideMenu.isOpen,
     routing: state.routing.locationBeforeTransitions
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     AsideMenuActions: bindActionCreators(AsideMenuActions , dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)
