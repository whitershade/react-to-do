import React, { PropTypes, Component }          from 'react'
import Paper                                    from 'material-ui/Paper'
import FontIcon                                 from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'

import * as types                               from '../constants/ToDoFilters'


const recentsIcon = <FontIcon className='material-icons'></FontIcon>;

export default class ToDoFilters extends Component {
  static PropTypes = {
    stateFilter: PropTypes.string.isRequired
  }

  onClickSetVisibilityFilter(filter) {
    this.props.dispatchSetVisibilityFilter.actionSetVisibilityFilter(filter)
  }

  setFilter(filter) {
    this.props.dispatchSetVisibilityFilter.actionSetVisibilityFilter(filter)
  }

  getCurrentNavPosition() {
    switch (this.props.stateFilter) {
      case types.SHOW_ALL:
        return 0
      case types.SHOW_DONE:
        return 1
      case types.SHOW_ACTIVE:
        return 2
      case types.SHOW_IMPORTANT:
        return 3
      default:
        return 0
    }
  }

  render() {
    const { stateFilter } = this.props
    return (
      <div className='todo-filters'>
        <div className='todo-filters__top-nav'>
          <Paper zDepth={ 1 }>
            <BottomNavigation selectedIndex={ this.getCurrentNavPosition() }>
               <BottomNavigationItem
                 label='All'
                 icon={ recentsIcon }
                 disabled= { stateFilter === types.SHOW_ALL }
                 onTouchTap={ () => this.setFilter(types.SHOW_ALL) }
               />
               <BottomNavigationItem
                 label='Done'
                 icon={recentsIcon}
                 disabled= { stateFilter === types.SHOW_DONE }
                 onTouchTap={ () => this.setFilter(types.SHOW_DONE) }
               />
               <BottomNavigationItem
                 label='Active'
                 icon={ recentsIcon }
                 disabled={ stateFilter === types.SHOW_ACTIVE }
                 onTouchTap={ () => this.setFilter(types.SHOW_ACTIVE) }
               />
               <BottomNavigationItem
                 label='Important'
                 icon={ recentsIcon }
                 disabled={ stateFilter === types.SHOW_IMPORTANT }
                 onTouchTap={ () => this.setFilter(types.SHOW_IMPORTANT ) }
               />
             </BottomNavigation>
           </Paper>
         </div>
      </div>
    )
  }
}
