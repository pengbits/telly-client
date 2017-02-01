const show = (state={showDetails:{}, loading:false}, action={}) => {
  switch (action.type){
    
    case 'FETCH_SHOW_DETAILS':
      return {
        loading: true
      }
      
    case 'FETCH_SHOW_DETAILS_SUCCESS': 
    case 'CREATE_SHOW_SUCCESS': 
      return {
        loading: false,
        showDetails: action.showDetails
      }
    
    case 'FETCH_SHOW_DETAILS_ERROR':
    case 'CASE_CREATE_SHOW_ERROR':
      return {
        loading: false,
        error: action.error
      }
      
    
    default:
      return state
  }
}

export default show