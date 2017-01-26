const shows = (state = [], action) => {
  switch (action.type){
    case 'SET_SHOWS':
      return []
    
    case 'GET_SHOWS':
      return action.shows
    
    case 'REQUEST_EPISODES':
      return action.id
      
    default:
      return state
  }
}

export default shows