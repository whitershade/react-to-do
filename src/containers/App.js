import React, { Component } from 'react'

import LeftMenu             from '../containers/LeftMenu';
import ToDoItems            from '../containers/ToDoItems';
import MainHeader           from '../containers/MainHeader';
import ToDoFilters          from '../containers/ToDoFilters';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <MainHeader />
        <LeftMenu />
        <ToDoItems />
        <ToDoFilters />
      </div>
    );
  }
}
