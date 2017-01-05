import {find} from 'lodash'
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

function requestEpisodes(id) {
  return {
    type: 'REQUEST_EPISODES',
    id
  }
}

function receiveEpisodes(id) {
  return {
    type: 'RECEiVE_EPISODES',
    episodes
  }
}


function isCached(showId, state) {
  return find(state.shows, (s) => {return `${s.id}` == showId})
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