import React, { Component } from 'react'

import ToDoFilters          from './ToDoStaff/ToDoFilters'
import ToDoItems            from './ToDoStaff/ToDoItems'
import ToDoAddNew           from './ToDoStaff/ToDoAddNew'


export default class ToDo extends Component {
  render() {
    return (
      <div className='todo'>
        <ToDoFilters />
        <ToDoItems showDeleted={ false } />
        <ToDoAddNew />
      </div>
    );
  }
}
