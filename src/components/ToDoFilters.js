import React, { PropTypes, Component }      from 'react'
import FlatButton                           from 'material-ui/FlatButton'

import { SHOW_ALL, SHOW_DONE, SHOW_ACTIVE } from '../constans/ToDoFilters'


export default class ToDoFilters extends Component {

  static PropTypes = {
    filter: PropTypes.string.isRequired
  }

  onClickSetVisibilityFilter(filter) {
    this.props.dispatchSetVisibilityFilter.actionSetVisibilityFilter(filter);
  }

  render() {
    const { filter } = this.props;
    return (
      <div className='todo-filters'>
        <FlatButton label='Show All'
                    onClick={ this.onClickSetVisibilityFilter.bind(this, SHOW_ALL) }
                    disabled={ filter === SHOW_ALL }
                    />
        <FlatButton label='Show Done'
                    onClick={ this.onClickSetVisibilityFilter.bind(this, SHOW_DONE) }
                    disabled={ filter === SHOW_DONE }
                    />
        <FlatButton label='Show Active'
                    onClick={ this.onClickSetVisibilityFilter.bind(this, SHOW_ACTIVE) }
                    disabled={ filter === SHOW_ACTIVE }
                    />
      </div>
    )
  }
}
