
const search = (state = {}, action) => {
  switch (action.type){
    case 'SET_SEARCH':
      return {
        isFetching: false,
        term: action.searchTerm
      }
      
    case 'REQUEST_SEARCH':
      return Object.assign({}, state, {
        isFetching: true
      })
      
    case 'RECEIVE_SEARCH':
      return Object.assign({}, state, {
        isFetching: false,
        results: action.results
      })
    
    default:
      return state
  }
}
export default search