import {find} from 'lodash'

export function getShowDetails(id) {
  
  return (dispatch, getState) => {
    dispatch(fetchShowDetails(id))
  }
}

function fetchShowDetails(id){
  return (dispatch, getState) => {
      
    dispatch(requestShowDetails(id));  
    
    return performFetch(`/series/${id}`, {
      apiToken: getState().api.token,
      ready: (json => {

        let queue =   getState().queue || []
        let inQueue = queue.indexOf(json.data.id) > -1
        let show =    Object.assign({}, json.data, {inQueue})
        
        dispatch(receiveShowDetails(show))
  
      }),
      error: (error => {
        // do stuff
        console.log(error) 
      })
    })
  }
}

function addShowToCache(show){
  return {
    type: 'ADD_SHOW_TO_CACHE',
    show
  }
}

function requestShowDetails(id) {
  return {
    type: 'REQUEST_SHOW_DETAILS',
    id
  }
}

function receiveShowDetails(show, inQueue) {
  return {
    type: 'RECEIVE_SHOW_DETAILS',
    show,
    inQueue
  }
}
