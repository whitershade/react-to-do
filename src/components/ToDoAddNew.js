import React, { Component } from 'react'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField'


export default class ToDoAddNew extends Component {
  constructor() {
    super()

    this.onClickButtonAddToDo = ::this.onClickButtonAddToDo
  }

  componentDidMount() {
    this.refs.inputNewToDo.input.focus()
  }

  onClickButtonAddToDo() {
    const { input } = this.refs.inputNewToDo

    this.props.dispatchToDoAddNew.actionAddToDo({
      id: Date.now(),
      text: input.value,
      completed: false,
      deleted: false
    })

    input.value = ''
    input.focus()
  }

  render() {
    return (
        <div className='todo-add-new'>
          <TextField
            hintText='Hint Text'
            ref = 'inputNewToDo'
          />
        <br />
          <FloatingActionButton onClick={ this.onClickButtonAddToDo }>
            <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}
