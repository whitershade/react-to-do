import React, { PropTypes, Component }          from 'react'
import Paper                                    from 'material-ui/Paper'
import FontIcon                                 from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'

import { SHOW_ALL, SHOW_DONE, SHOW_ACTIVE }     from '../constants/ToDoFilters'


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
      case SHOW_ALL:
        return 0
      case SHOW_DONE:
        return 1
      case SHOW_ACTIVE:
        return 2
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
                 disabled= { stateFilter === SHOW_ALL }
                 onTouchTap={ () => this.setFilter(SHOW_ALL) }
               />
               <BottomNavigationItem
                 label='Done'
                 icon={recentsIcon}
                 disabled= { stateFilter === SHOW_DONE }
                 onTouchTap={ () => this.setFilter(SHOW_DONE) }
               />
               <BottomNavigationItem
                 label='Active'
                 icon={ recentsIcon }
                 disabled={ stateFilter === SHOW_ACTIVE }
                 onTouchTap={ () => this.setFilter(SHOW_ACTIVE) }
               />
             </BottomNavigation>
           </Paper>
         </div>
      </div>
    )
  }
}
