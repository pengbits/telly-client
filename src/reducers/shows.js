import show from './show'

import {
  SET_SHOWS,
  GET_SHOWS
  // ,
  // SELECT_SHOW,
  // ADD_SHOW_TO_QUEUE,
  // REMOVE_SHOW_FROM_QUEUE
} from '../actions/shows';


const shows = (state = [], action) => {
  switch (action.type){
    case SET_SHOWS:
      return []
    
    case GET_SHOWS:
      return action.shows
          
    // case ADD_SHOW_TO_QUEUE: 
    //   var {id,seriesName} = action.show;
    //   var list =  state.map(({id}) => id)
    //   var isNew = list.indexOf(id) == -1
    // 
    //   return !isNew ? state : [ 
    //     ...state, {id,seriesName}
    //   ]
    // 
    // case REMOVE_SHOW_FROM_QUEUE:
    //   var {id,seriesName} = action.show;
    //   var edit = []
    //   state.map(function(s){
    //     if(s.id !== id){
    //       edit.push(s)
    //     }
    //   })

      return edit
      
    default:
      return state
  }
}

export default shows