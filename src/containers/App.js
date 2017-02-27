import React, { Component } from 'react'
import Drawer from '../containers/LeftMenu'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Drawer />
        </MuiThemeProvider>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     const { user, page } = this.props
//     const { getPhotos } = this.props.pageActions
//
//     return <div>
//       <User name={user.name} />
//       <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
//     </div>
//   }
// }
//
