import React, { Component } from 'react'

import TextField            from 'material-ui/TextField'
import ContentAdd           from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'


export default class ToDoAddNew extends Component {
  constructor() {
    super()

    this.state = {
      errorMessage: ''
    }

    this.onClickButtonAddToDo = ::this.onClickButtonAddToDo
    this.inputOnChange = ::this.inputOnChange
  }

  componentDidMount() {
    this.refs.inputNewToDo.input.focus()
  }

  inputOnChange() {
    this.setState({ errorMessage: '' })
  }

  onClickButtonAddToDo() {
    const { input } = this.refs.inputNewToDo

    if(input.value === '') {
      this.setState({ errorMessage: 'This is required field' })
      return
    }

    this.props.addToDo({
      id: Date.now(),
      text: input.value,
      completed: false,
      deleted: false,
      onChange: false
    })

    input.value = ''
    input.focus()
  }

  render() {
    return (
        <div className='todo-add-new'>
          <TextField
            hintText = 'Hint Text'
            ref = 'inputNewToDo'
            errorText = { this.state.errorMessage }
            onChange = { this.inputOnChange }
          />
        <br />
          <FloatingActionButton onClick={ this.onClickButtonAddToDo }>
            <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}
