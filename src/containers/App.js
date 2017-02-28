import React, { Component } from 'react'

import MainHeader from '../containers/MainHeader';
import LeftMenu from '../containers/LeftMenu';
import ToDoContainer from '../containers/ToDo';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <MainHeader />
        <LeftMenu />
        <ToDoContainer />
      </div>
    );
  }
}
