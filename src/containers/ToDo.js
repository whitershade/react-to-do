import React, { Component } from 'react'

import ToDoFilters          from './ToDoStaff/ToDoFilters'
import ToDoAddNew           from './ToDoStaff/ToDoAddNew'
import ToDoItems            from './ToDoStaff/ToDoItems'


export default class ToDo extends Component {
  render() {
    return (
      <div className='todo'>
        <ToDoFilters />
        <ToDoAddNew />
        <ToDoItems />
      </div>
    );
  }
}
