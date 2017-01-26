const app = (state={isFetching: true}, action) => {
  switch (action.type){
    
    case 'REQUEST_SHOWS':
    case 'REQUEST_SHOW_DETAILS':
      return {isFetching: true}
    
    case 'RECEIVE_SHOWS':
    case 'RECEIVE_SHOW_DETAILS':
    
      return {isFetching: false}
      
    case 'SERVER_ERROR':
      return  {
        isFetching: false,
        hasErrors: true
      }
      
    default:
      return state
  }
}

export default app