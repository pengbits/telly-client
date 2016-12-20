import show from './show'

import {
  SET_SHOWS,
  SELECT_SHOW,
  ADD_SHOW_TO_QUEUE
} from '../actions/shows';

import {
  INITIAL_SHOWS
} from '../../config/shows';

const shows = (state = [], action) => {
  switch (action.type){
    case SET_SHOWS:
      return action.shows || INITIAL_SHOWS
      
    case ADD_SHOW_TO_QUEUE: 
      return [].concat(state, action.show)
  
    default:
      return state
  }
}

export default shows