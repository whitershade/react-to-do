import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import { autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk' // <-- добавили redux-thunk

export default function configureStore(initialState) {
  const logger = createLogger()
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, logger),
      autoRehydrate()
    )
  ) // <!-- добавляем его в цепочку middleware'ов

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
