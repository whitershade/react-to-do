import 'babel-polyfill';

import React                from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux'
import { AppContainer }     from 'react-hot-loader';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme          from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider'

import configureStore       from './store/configureStore'

import App                  from './containers/App'

import './styles/app.css'


injectTapEventPlugin();

const rootEl = document.getElementById('root')
const store = configureStore()
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Component />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./containers/App', () => render(App));
