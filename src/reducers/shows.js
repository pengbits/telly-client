const shows = (state = {list: [], loading:false}, action) => {
  switch (action.type){
    
    case 'RECEIVE_SHOWS':
      return {
        list: action.shows,
        loading: false
      }
      
    case 'FETCH_SHOWS_ERROR':
      return {
        list: [],
        loading: false,
        error: action.error
      }
      
    default:
      return state
  }
}

export default shows