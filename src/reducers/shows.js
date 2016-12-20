import show from './show'

import {
  SET_SHOWS,
  GET_SHOWS,
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
    
    case GET_SHOWS:
      return state.shows || INITIAL_SHOWS
      
    case ADD_SHOW_TO_QUEUE: 
      var {id,seriesName} = action.show;
      var list =  state.map(({id}) => id)
      var isNew = list.indexOf(id) == -1
      if(isNew){
        return [].concat(state, {id,seriesName})
      } else {
        return state
      }

    default:
      return state
  }
}

export default shows