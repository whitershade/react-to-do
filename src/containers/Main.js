import React, { Component } from 'react'

import ToDoFilters          from '../connectors/ToDoConnectors/ToDoFilters'
import ToDoAddNew           from '../connectors/ToDoConnectors/ToDoAddNew'
import ToDoItems            from '../connectors/ToDoConnectors/ToDoItems'
import ToDoProgressBar      from '../connectors/ToDoConnectors/ToDoProgressBar'


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
