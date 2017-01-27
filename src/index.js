import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'
import AppContainer from './containers/AppContainer'
import { loadState, saveState } from './localStorage'
import ShowsListContainer from './containers/ShowsListContainer'
import ShowDetailsContainer from './containers/ShowDetailsContainer'


const composeEnhancers = composeWithDevTools({}); 
const store = createStore(rootReducer, loadState(), composeEnhancers(
  applyMiddleware(thunk)// (thunk,logger)
))

store.subscribe(() => {
  const {shows,queue} = store.getState()
  //saveState({shows,queue})
})

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}> 
        <Route path="/shows" component={ShowsListContainer} /> 
        <Route path="/shows/:id" component={ShowDetailsContainer} /> 
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)