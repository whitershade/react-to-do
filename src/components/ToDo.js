import React, { PropTypes, Component } from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';


export default class ToDoContainer extends Component {
  static PropTypes = {
    todos: PropTypes.array.isRequired
  }

  buttonAddOnClick() {
    const { addToDo } = this.props.todosActions,
          { value } = this.refs.inputNewToDo.input;

    addToDo({ id: Date.now(), text: value });
    this.refs.inputNewToDo.input.value = '';
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="todo">
        { todos.map(item => (
          <Card key={item.id}>
            <CardText>
              {item.text}
            </CardText>
          </Card>)) }
        <div className="todo__add-new">
        <TextField
          hintText="Hint Text"
          ref = 'inputNewToDo'
        />
        <br />
        <FloatingActionButton onClick={::this.buttonAddOnClick}>
          <ContentAdd />
        </FloatingActionButton>
        </div>
      </div>
    );
  }
}
