const app = (state={isFetching: true}, action) => {
  switch (action.type){
    
    case 'REQUEST_SHOWS':
      return {isFetching: true}
    
    case 'RECEIVE_SHOWS':
      return {isFetching: false}
      
    default:
      return state
  }
}

export default app