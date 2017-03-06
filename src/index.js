import 'babel-polyfill';

import React                      from 'react';
import ReactDOM                   from 'react-dom';
import { Provider }               from 'react-redux'

import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore }   from 'react-router-redux'

import { AppContainer }           from 'react-hot-loader'

import injectTapEventPlugin       from 'react-tap-event-plugin';
import getMuiTheme                from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider'

import configureStore             from './store/configureStore'

import { routes }                 from './routes'

import './styles/app.css'
import { persistStore } from 'redux-persist'

injectTapEventPlugin();


const rootEl = document.getElementById('root'),
      store = configureStore(),
      history = syncHistoryWithStore(browserHistory, store),
      render = () =>
          ReactDOM.render(
            <AppContainer>
              <Provider store={ store }>
                <MuiThemeProvider muiTheme={ getMuiTheme() }>
                  <Router history={ history } routes={ routes } />
                </MuiThemeProvider>
              </Provider>
            </AppContainer>,
            rootEl
          );

// begin periodically persisting the store
persistStore(store)
render();
if (module.hot) module.hot.accept('./containers/App', () => render());
