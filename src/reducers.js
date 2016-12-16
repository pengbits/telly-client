import { combineReducers } from 'redux'
import {
  SET_SHOWS,
  SET_SEARCH,
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  RECEIVE_SEARCH_ERROR,
  PERFORM_SEARCH
} from './actions';

import {
  INITIAL_SHOWS
} from '../config/shows';

// jumping around with format of state is breaking everything
// remember these only work on one node at a time, so might not be maps

const search = (state = {}, action) => {
  switch (action.type){
    case SET_SEARCH:
      return {
        isFetching: false,
        term: action.searchTerm
      }
      
    case REQUEST_SEARCH:
      return Object.assign({}, state, {
        isFetching: true
      })
      
    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.results
      })
      
    case RECEIVE_SEARCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        results: [],
        error: error
      })
    
    default:
      return state
  }
}

const shows = (list =[], action) => {
  switch (action.type){
    case SET_SHOWS:
      return action.shows || INITIAL_SHOWS
    default:
      return list
  }
}

// combine above reducers
const rootReducer = combineReducers({
  search,
  shows
})

export default rootReducer

