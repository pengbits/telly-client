import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './redux/index'
import AppContainer from './containers/AppContainer'
import { loadState, saveState } from './localStorage'
import ShowsListContainer from './containers/ShowsListContainer'
import ShowDetailsContainer from './containers/ShowDetailsContainer'
import ShowFormContainer from './containers/ShowFormContainer'
import NetworksListContainer from './containers/NetworksListContainer'
import NetworkDetailsContainer from './containers/NetworkDetailsContainer'
import NetworkFormContainer from './containers/NetworkFormContainer'


const composeEnhancers = composeWithDevTools({}); 
const store = createStore(rootReducer, loadState(), composeEnhancers(
  applyMiddleware(
    thunk,
    promiseMiddleware({
      'promiseTypeSuffixes':['LOADING','SUCCESS','ERROR']
    })
  )// (thunk,logger)
))

store.subscribe(() => {
  const {shows,queue} = store.getState()
  //saveState({shows,queue})
})

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}> 
        <Route path="/shows"              component={ShowsListContainer} /> 
        <Route path="/shows/:id"          component={ShowDetailsContainer} /> 
        <Route path="/shows/new"          component={ShowFormContainer} /> 
        <Route path="/shows/:id/edit"     component={ShowFormContainer} /> 
        
        <Route path="/networks"           component={NetworksListContainer} />
        <Route path="/networks/:id"       component={NetworkDetailsContainer} />
        <Route path="/networks/new"       component={NetworkFormContainer} /> 
        <Route path="/networks/:id/edit"  component={NetworkFormContainer} /> 
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)