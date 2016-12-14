import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'

const composeEnhancers = composeWithDevTools({}); 

// 
// const logger = store => next => action => {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   return result
// }

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)// (thunk,logger)
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)