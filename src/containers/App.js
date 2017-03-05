import React, { Component } from 'react'

import LeftMenu             from '../containers/LeftMenu';
import MainHeader           from '../containers/MainHeader';


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
