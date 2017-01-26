const app = (state={isFetching: true}, action) => {
  switch (action.type){
    
    case 'REQUEST_SHOWS':
      return {isFetching: true}
    
    case 'RECEIVE_SHOWS':
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