import React, { PropTypes, Component }      from 'react'

import FlatButton                           from 'material-ui/FlatButton'
import { Card, CardText }                   from 'material-ui/Card'
import Checkbox                             from 'material-ui/Checkbox'

import { SHOW_ALL, SHOW_DONE, SHOW_ACTIVE } from '../constans/ToDoFilters'

export default class ToDoItems extends Component {
  static PropTypes = {
    stateTodos: PropTypes.array.isRequired,
    stateFilter: PropTypes.string.isRequired,
    stateShowDeleted: PropTypes.bool.isRequired
  }

  onClickCheckboxToDo(id) {
    this.props.dispatchToDoItems.actionMarkToDoAsDone(id)
  }

  onClickMarkToDoAsDeleted(id) {
    this.props.dispatchToDoItems.actionMakrToDoAsDeleted(id)
  }

  onClickFinallyDeleteToDo(id) {
    this.props.dispatchToDoItems.actionFinallyRemoveToDo(id)
  }

  getVisibleTodos() {
    const { stateTodos, stateFilter } = this.props
    switch (stateFilter) {
      case SHOW_ALL:
        return stateTodos
      case SHOW_DONE:
        return stateTodos.filter(todo => todo.completed === true)
      case SHOW_ACTIVE:
        return stateTodos.filter(todo => todo.completed === false)
      default:
        return stateTodos
    }
  }

  render() {
    const { stateShowDeleted } = this.props
    return (
      <div className='todo-items'>
        { this.getVisibleTodos().map(item => (
          <Card key={ item.id }>
            <CardText className={ item.completed ? 'todo__completed' : '' }>
              { item.text }
              <FlatButton label='Remove' secondary={ true } onClick= { !stateShowDeleted ?
                                                                        this.onClickMarkToDoAsDeleted.bind(this, item.id) :
                                                                        this.onClickFinallyDeleteToDo.bind(this, item.id)
                                                                      }
                                                                        />
              <div className='todo__checkbox-done'>
                {!stateShowDeleted && (
                      <Checkbox onCheck={ this.onClickCheckboxToDo.bind(this, item.id) }
                                defaultChecked={ item.completed }
                      />)}
              </div>
            </CardText>
          </Card>))
         }
      </div>
    );
  }
}
