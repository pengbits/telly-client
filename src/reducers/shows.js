const shows = (state = [], action) => {
  switch (action.type){
    case 'SET_SHOWS':
      return []
    
    case 'RECEIVE_SHOWS':
      return action.shows
    
    default:
      return state
  }
}

export default shows