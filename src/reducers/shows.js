const shows = (state = {}, action) => {
  switch (action.type){
    
    case 'REQUEST_SHOWS':
      return state
      
    case 'RECEIVE_SHOWS':
      return action.shows
    
    default:
      return state
  }
}

export default shows