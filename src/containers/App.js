import React, { Component } from 'react'

import MainHeader from '../containers/MainHeader';
import LeftMenu from '../containers/LeftMenu';
import ToDoItems from '../containers/ToDoItems';
import ToDoFilters from '../components/ToDoFilters';

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
