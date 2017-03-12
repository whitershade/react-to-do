import React, { Component } from 'react'

import AsideMenu            from '../connectors/AppConnectors/AsideMenu'
import MainHeader           from '../connectors/AppConnectors/MainHeader'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <MainHeader />
        <AsideMenu />
        { this.props.children }
      </div>
    );
  }
}
