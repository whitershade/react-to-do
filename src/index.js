import 'babel-polyfill';

import React           from 'react'
import { render }      from 'react-dom'
import { Provider }    from 'react-redux'

import App             from './containers/App'
import configureStore  from './store/configureStore'
import './styles/app.css'

import getMuiTheme from 'material-ui/styles/getMuiTheme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore()

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
