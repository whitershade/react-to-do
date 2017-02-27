import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LeftMenuActions from '../actions/LeftMenuActions'
import leftMenu from '../components/Drawer'

function mapStateToProps(state) {
   return {
     isOpen: state.LeftMenu.isOpen,
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
     LeftMenuActions: bindActionCreators(LeftMenuActions, dispatch)
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(leftMenu)
