import fetch from 'isomorphic-fetch'
import {CORS_PROXY_PORT, TVDB_HOST} from './api'

// prepare the show details request 
export const REQUEST_SHOW_DETAILS = 'REQUEST_SHOW_DETAILS'
export function requestShowDetails(id) {
  return {
    type: REQUEST_SHOW_DETAILS,
    id
  }
}

// onready
export const RECEIVE_SHOW_DETAILS = 'RECEIVE_SHOW_DETAILS'
export function receiveShowDetails(show, inQueue) {
  return {
    type: RECEIVE_SHOW_DETAILS,
    show,
    inQueue
  }
}

// SHOW details
export const fetchShowDetails = (id) => {

  return (dispatch, getState) => {
    
    let state = getState();
    let apiToken = state.api.token; 
    if(apiToken){
      dispatch(requestShowDetails(id));  
      
      let path = `/series/${id}`;
      return fetch(`http://localhost:${CORS_PROXY_PORT}${path}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Target-URL': TVDB_HOST
        }
      })
      .then(response => response.json())
      .then(json => {

          let showIds = state.shows.map(({id}) => id)
          let inQueue = showIds.indexOf(json.data.id) > -1
        
        dispatch(receiveShowDetails(json.data, inQueue))
      })
      .catch(error => {
        console.log(error)
      })
    }
    
    else {
      throw new Error('no api token found in shows#fetchShowDetails')
    }
  }
}

