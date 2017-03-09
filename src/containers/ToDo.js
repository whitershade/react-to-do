import React, { Component } from 'react'

import ToDoFilters          from './ToDoStaff/ToDoFilters'
import ToDoAddNew           from './ToDoStaff/ToDoAddNew'
import ToDoItems            from './ToDoStaff/ToDoItems'
import ToDoProgressBar      from './ToDoStaff/ToDoProgressBar'


export default class ToDo extends Component {
  render() {
    return (
      <div className='todo'>
        <ToDoFilters />
        <ToDoAddNew />
        <ToDoProgressBar />
        <ToDoItems />
      </div>
    );
  }
}
