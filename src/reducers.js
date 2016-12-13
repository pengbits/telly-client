import { combineReducers } from 'redux'
import {
  SET_SHOWS,
  SET_SEARCH,
  REQUEST_SEARCH,
  RECEIVE_SEARCH
} from './actions';


function search(state = {}, action){
  switch (action.type){
    case SET_SEARCH:
      return action.search
    case REQUEST_SEARCH:
      return Object.assign({}, state {
        isFetching: true
      })
    case RECEIVE_SEARCH:
      return Object.assign({}, state {
        isFetching: false,
        series: action.results
      })
    default:
      return state
  }
}

function setShows(state = {}, action){
  switch (action.type){
    case SET_SHOWS:
      return action.shows
    default:
      return state
  }
}

export default combineReducers({
  setShows,
  search
})

