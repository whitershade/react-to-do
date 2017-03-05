import React, { Component } from 'react'

import ToDoItems            from '../containers/ToDoItems';
import ToDoFilters          from '../containers/ToDoFilters';


export default class ToDo extends Component {
  render() {
    return (
      <div>
        <ToDoFilters />
        <ToDoItems />
      </div>
    );
  }
}
