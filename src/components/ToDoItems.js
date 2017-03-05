import React, { PropTypes, Component }      from 'react'

import FloatingActionButton                 from 'material-ui/FloatingActionButton';
import FlatButton                           from 'material-ui/FlatButton';
import ContentAdd                           from 'material-ui/svg-icons/content/add';
import { Card, CardText }                   from 'material-ui/Card';
import TextField                            from 'material-ui/TextField';
import Divider                              from 'material-ui/Divider';

import { SHOW_ALL, SHOW_DONE, SHOW_ACTIVE } from '../constans/ToDoFilters'


export default class ToDoItems extends Component {
  static PropTypes = {
    stateTodos: PropTypes.array.isRequired,
    stateFilter: PropTypes.string.isRequired
  }

  onClickButtonAddToDo() {
    const { value } = this.refs.inputNewToDo.input;

    this.props.dispatchToDoItems.actionAddToDo({ id: Date.now(), text: value, completed: false })
    this.refs.inputNewToDo.input.value = ''
  }

  onClickCardToDo(id) {
    this.props.dispatchToDoItems.actionMarkToDo(id)
  }

  onClickRemoveButton(id) {
    this.props.dispatchToDoItems.actionRemoveToDo(id)
  }

  getVisibleTodos() {
    const { stateTodos, stateFilter } = this.props;

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
    return (
      <div className='todo'>
        { this.getVisibleTodos().map(item => (
          <Card key={ item.id } onClick={ this.onClickCardToDo.bind(this, item.id) }>
            <CardText className= { item.completed ? 'todo__completed' : '' }>
              { item.text }
              <FlatButton label='Remove' secondary={ true } onClick= { this.onClickRemoveButton.bind(this, item.id) }/>
            </CardText>
            <Divider />
          </Card>)) }
        <div className='todo__add-new'>
        <TextField
          hintText='Hint Text'
          ref = 'inputNewToDo'
        />
        <br />
        <FloatingActionButton onClick={ ::this.onClickButtonAddToDo }>
          <ContentAdd />
        </FloatingActionButton>
        </div>
      </div>
    );
  }
}
