import 'babel-polyfill';

import React                      from 'react';
import ReactDOM                   from 'react-dom';
import { Provider }               from 'react-redux'
import { Router }                 from 'react-router'
import { AppContainer }           from 'react-hot-loader'
import createBrowserHistory       from 'history/lib/createBrowserHistory'

import injectTapEventPlugin       from 'react-tap-event-plugin';
import getMuiTheme                from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider'

import configureStore             from './store/configureStore'

import { routes }                 from './routes'

import './styles/app.css'

injectTapEventPlugin();

const rootEl = document.getElementById('root')
const store = configureStore()
const render = () =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Router history={createBrowserHistory()} routes={routes} />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    rootEl
  );

render();
if (module.hot) module.hot.accept('./containers/App', () => render());
