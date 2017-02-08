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
      
    case 'CREATE_SHOW_SUCCESS':
      const payload = Object.assign({
        '_id' : action.showDetails._id
      }, ...showDetails);
      
      console.log(`
        |reducer| ${action.type}
        ${JSON.stringify(payload)}
      `)
      return {
        loading: false,
        showDetails: payload
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