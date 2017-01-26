const show = (state={}, action={}) => {
  switch (action.type){
    
    case 'REQUEST_SHOW_DETAILS':
      return Object.assign({}, state, {
        isFetching: true
      })
      
    case 'RECEIVE_SHOW_DETAILS':  
      return Object.assign({}, state, {
        isFetching: false      
      }, 
      action.show)
    
    default:
      return state
  }
}

export default show