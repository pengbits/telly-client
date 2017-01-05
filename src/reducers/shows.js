import {find} from 'lodash'

const shows = (state = [], action) => {
  switch (action.type){
    case 'SET_SHOWS':
      return []
    
    case 'GET_SHOWS':
      return action.shows
    
    
    case 'RECEIVE_SHOW_DETAILS':
      // build a list of show ids
      // let list = state.map(({id}) => id)
      // if the fetched show is already cached, do nothing,
      // otherwise add it to the list
      if(find(state, (show) => {return show.id == action.show.id})){
        return state
      } else { 
        return [...state].concat(action.show)
      }
    case 'REQUEST_EPISODES':
      return action.id
      
    default:
      return state
  }
}

export default shows