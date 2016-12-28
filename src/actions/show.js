import {performFetch} from './api'

// prepare the show details request 
export function requestShowDetails(id) {
  return {
    type: 'REQUEST_SHOW_DETAILS',
    id
  }
}

// onready
export function receiveShowDetails(show, inQueue) {
  return {
    type: 'RECEIVE_SHOW_DETAILS',
    show,
    inQueue
  }
}

export function getShowDetails(id) {
  
  return (dispatch, getState) => {
    // look in local cache, and if nothing is there, fetch the show details via api
    let state = getState()
    if(isCached(id, state)) {
      console.log(`getShowFromCache ${id}`);
      dispatch(receiveShowDetails(getShowFromCache(id, state)))
    }
    else {
      console.log('not cached')
      dispatch(fetchShowDetails(id))
    }
  }
}

function isCached(showId, state){
  let showIds = state.shows.map(({id}) => `${id}`); // cast number to string
  return (showIds.indexOf(showId) > -1)
}

const getShowFromCache = (id, state) => {
  let show; state.shows.map((s) => {
    if(s.id == id) {
      show = s; 
      return
    }
  })
  return show
}

const fetchShowDetails = (id) => {

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

export function setShowIsQueued(show, inQueue) {
  return {
    type: 'SET_SHOW_IS_QUEUED',
    show,
    inQueue
  }
}