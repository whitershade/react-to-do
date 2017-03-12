import { connect }                  from 'react-redux'

import ToDoProgressBar              from '../../components/ToDoProgressBar'


function mapStateToProps(state) {
   return {
     stateProgressBarValue: state.ToDoProgressBar.value
   }
 }

 export default connect(mapStateToProps)(ToDoProgressBar)
