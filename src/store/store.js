import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Combined Reducer
import allReducer from './reducers/allReducer'

// middlewares
import middlewares from './middlewares/middlewares'

// Redux Persist
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, allReducer)

// Browser Redux DevTools Docs: http://bit.ly/35BZ4bv
const middleWares = [thunk, ...middlewares]

const reduxDevToolsOption = {
  trace: true
}
const composeEnhancers = composeWithDevTools(reduxDevToolsOption)

export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(...middleWares)
  )
)

export const persistor = persistStore(store)
