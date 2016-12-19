import {
  SET_SHOWS,
  REQUEST_SHOW_DETAILS,
  RECEIVE_SHOW_DETAILS,
  SELECT_SHOW
} from '../actions/shows';

import {
  INITIAL_SHOWS
} from '../../config/shows';

export const shows = (list =[], action) => {
  switch (action.type){
    case SET_SHOWS:
      return action.shows || INITIAL_SHOWS
  
    default:
      return list
  }
}

export const show = (state={}, action) => {
  switch (action.type){
    
    case REQUEST_SHOW_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      })
      
    case RECEIVE_SHOW_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
      }, 
      action.data)
    
    default:
      return state
  }
}