import React, { Component } from 'react'

import LeftMenu             from '../connectors/AppConnectors/LeftMenu';
import MainHeader           from '../connectors/AppConnectors/MainHeader';
 

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
