const shows = (state = {list: [], loading:false}, action) => {
  switch (action.type){
    
    case 'FETCH_SHOWS_SUCCESS':
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