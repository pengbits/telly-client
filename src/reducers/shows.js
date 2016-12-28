const shows = (state = [], action) => {
  switch (action.type){
    case 'SET_SHOWS':
      return []
    
    case 'GET_SHOWS':
      return action.shows
    
    case 'GET_SHOW_LIST':
      return action.showList
    
    // case 'ADD_SHOW_TO_CACHE':
    //   return [...state].concat(action.show)
      
    default:
      return state
  }
}

export default shows