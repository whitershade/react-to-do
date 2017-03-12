import React, { Component }   from 'react'

import ToDoItems              from '../connectors/ToDoConnectors/ToDoItems'
import ToDoDeletedMenuActions from '../connectors/ToDoConnectors/ToDoDeletedMenuActions'


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
