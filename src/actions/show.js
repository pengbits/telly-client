import {find} from 'lodash'

export function getShowDetails(id) {
  
  return (dispatch, getState) => {
    dispatch(fetchShowDetails(id))
  }
}

function fetchShowDetails(id){
  return (dispatch, getState) => {
      
    dispatch(requestShowDetails(id));  
    
    fetch(`http://localhost:3000/shows/${id}`)
    .then((res)=>{
      if(res.status >= 400){
        dispatch(serverError(res))
      } else {
        return res.json()
      }
    })
    .then((xhr) => {
      dispatch(receiveShowDetails(xhr.show))
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

function receiveShowDetails(show) {
  return {
    type: 'RECEIVE_SHOW_DETAILS',
    show
  }
}
