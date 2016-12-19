import fetch from 'isomorphic-fetch'

const TVDB_HOST = "https://api.thetvdb.com"
const CORS_PROXY_PORT = 3000;



// load initial shows into list
export const SET_SHOWS = 'SET_SHOWS'
export function setShows(shows) {
  return {
    type: SET_SHOWS,
    shows
  }
}

// select a show to display details for
export const SELECT_SHOW = 'SELECT_SHOW'
export function selectShow(show) {
  return {
    type: SELECT_SHOW,
    show
  }
}

// set the search term to use in searches of tvdb
export const SET_SEARCH = 'SET_SEARCH'
export function setSearchTerm(searchTerm){
  return {
    type: SET_SEARCH,
    searchTerm
  }
}
// prepare the search request 
export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export function requestSearch(searchTerm) {
  return {
    type: REQUEST_SEARCH,
    searchTerm
  }
}

// handle search onready
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export function receiveSearch(searchTerm, results) {
  return {
    type: RECEIVE_SEARCH,
    searchTerm,
    results
  }
}

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
export function receiveShowDetails(id, show) {
  return {
    type: RECEIVE_SHOW_DETAILS,
    id,
    show
  }
}

// get api credentials
export const REQUEST_API_TOKEN = 'REQUEST_API_TOKEN';
export function requestAPIToken(){
  return {
    type: REQUEST_API_TOKEN
  }
}

export const RECEIVE_API_TOKEN = 'RECEIVE_API_TOKEN';
export function receiveAPIToken(token){
  return {
    type: RECEIVE_API_TOKEN,
    token
  }
}

export const fetchAPIToken = (credentials) => {

  return (dispatch, getState) => {
    dispatch(requestAPIToken());
    
    let path = '/login'
    return fetch(`http://localhost:${CORS_PROXY_PORT}${path}`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Target-URL': TVDB_HOST
      },
      // this is not being read by the proxy server for some reason..
      // we actually resorted to hard-coding the same credentials 
      // into the server app, and add them to the fetch in the server layer,
      // if the path is `/login`
      body: JSON.stringify({
        apikey:   credentials.apikey,
        userkey:  credentials.userkey,
        username: credentials.username
      })
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveAPIToken(json.token))
    })
  }

}


// SEARCH
// initiate api call to search for show by name
export const fetchSearch = () => {

  return (dispatch, getState) => {

    let state = getState();
    let searchTerm = state.search.term;
    let apiToken = state.api.token; 
    if(!apiToken) throw new Error('no api token found')
    dispatch(requestSearch(searchTerm));
    
    // TODO write a wrapper for all the repeated boilerplate that returns a Promise
    let path = `/search/series?name=${searchTerm}`;
    return fetch(`http://localhost:${CORS_PROXY_PORT}${path}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Target-URL': TVDB_HOST
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.data)
      if(json.data && json.data.length){
        dispatch(receiveSearch(searchTerm, json.data))
      } else {
        console.log('something went wrong')
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
}

// SHOW details
export const fetchShowDetails = (id) => {
  return (dispatch, getState) => {
    
    let state = getState();
    let apiToken = state.api.token; 
    if(!apiToken) throw new Error('no api token found in fetchShowDetails')

    dispatch(requestShowDetails(id));  
    
    let path = `/series/${id}`;
    return fetch(`http://localhost:${CORS_PROXY_PORT}/${path}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Target-URL': TVDB_HOST
      }
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveShowDetails(id, json))
    })
    .catch(error => {
      console.log(error)
    })
  }
}


