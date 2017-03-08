import React, { Component } from 'react'

import ToDoItems            from './ToDoStaff/ToDoItems'
import ToDoDeletedMenuActions from './ToDoStaff/ToDoDeletedMenuActions'

export default class ToDo extends Component {
  render() {
    return (
      <div className='todo'>
        <ToDoDeletedMenuActions />
        <ToDoItems />
      </div>
    );
  }
}
