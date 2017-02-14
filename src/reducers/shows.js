const shows = (state = {list: [], loading:false}, action) => {
  console.log(action)
  switch (action.type){
    case 'FETCH_SHOWS_SUCCESS':
      return {
        list: action.shows,
        loading: false
      }
    case 'DELETE_SHOW_SUCCESS':

      return {
        list: state.list.filter(show => {
          return show._id !== action.show._id
        }),
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