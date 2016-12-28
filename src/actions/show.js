import {performFetch} from './api'

export function getShowDetails(id) {
  
  return (dispatch, getState) => {
    // look in local cache, and if nothing is there, fetch the show details via api
    let state = getState()
    
    if(isCached(id, state)) {
      dispatch(receiveShowDetails(getShowFromCache(id, state)))
    }
    else {
      dispatch(fetchShowDetails(id))
    }
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
        
        dispatch(addShowToCache(show))
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

function isCached(showId, state) {
  let showIds = state.shows.map(({id}) => `${id}`); // cast number to string
  return (showIds.indexOf(showId) > -1)
}

function getShowFromCache(id, state) {
  let show; 
  state.shows.map((s) => {
    if(s.id == id) { show = s; return }
  })
  return show
}

export function setShowIsQueued(show, inQueue) {
  return {
    type: 'SET_SHOW_IS_QUEUED',
    show,
    inQueue
  }
}