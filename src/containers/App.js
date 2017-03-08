import React, { Component } from 'react'

import LeftMenu             from './AppStaff/LeftMenu';
import MainHeader           from './AppStaff/MainHeader';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <MainHeader />
        <LeftMenu />
        { this.props.children }
      </div>
    );
  }
}
