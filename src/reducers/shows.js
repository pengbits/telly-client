const shows = (state = [], action) => {
  switch (action.type){
    case 'SET_SHOWS':
      return []
    
    case 'GET_SHOWS':
      return action.shows

      return edit
      
    default:
      return state
  }
}

export default shows