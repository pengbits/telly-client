// import fetch from 'isomorphic-fetch'
// import {CORS_PROXY_PORT, TVDB_HOST} from './api'
import {performFetch} from './api'

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

// show details
export const fetchShowDetails = (id) => {

  return (dispatch, getState) => {
    
    dispatch(requestShowDetails(id));  
    
    return performFetch(`/series/${id}`, {
      apiToken: getState().api.token,
      ready: (json => {

        let showIds = getState().shows.map(({id}) => id)
        let inQueue = showIds.indexOf(json.data.id) > -1
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


export const SET_SHOW_IS_QUEUED = 'SET_SHOW_IS_QUEUED'
export function setShowIsQueued(show, inQueue) {
  return {
    type: SET_SHOW_IS_QUEUED,
    show,
    inQueue
  }
}