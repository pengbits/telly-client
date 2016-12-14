import { combineReducers } from 'redux'
import {
  SET_SHOWS,
  SET_SEARCH,
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  PERFORM_SEARCH
} from './actions';


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
      
    case PERFORM_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.results
      })
      
    default:
      return state
  }
}

const shows = (list =[], action) => {
  switch (action.type){
    case SET_SHOWS:
      return action.shows
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

