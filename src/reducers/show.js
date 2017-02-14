const show = (state={showDetails:{}, loading:false}, action={}) => {
  switch (action.type){
    
    case 'FETCH_SHOW_DETAILS':
      return {
        loading: true
      }
      
    case 'FETCH_SHOW_DETAILS_SUCCESS': 
      return {
        loading: false,
        showDetails: action.showDetails
      }
    case 'CREATE_SHOW':
      return {
        loading: false
      }
    case 'CREATE_SHOW_SUCCESS':
      return {
        loading: false,
        message: 'Your changes have been saved'
      }
    case 'UPDATE_SHOW_SUCCESS':
      return {
        loading: false,
        message: 'Your changes have been saved',
        showDetails: action.showDetails
      }
      
    case 'FETCH_SHOW_DETAILS_ERROR':
    case 'CREATE_SHOW_ERROR':
    case 'UPDATE_SHOW_ERROR':
      return {
        loading: false,
        error: action.error
      }
      
    
    default:
      return state
  }
}

export default show