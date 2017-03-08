import React, { Component } from 'react'

import ToDoItems            from './ToDoStaff/ToDoItems'


export default class ToDo extends Component {
  render() {
    return (
      <div className='todo'>
        <ToDoItems />
      </div>
    );
  }
}
