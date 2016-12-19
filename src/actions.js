import fetch from 'isomorphic-fetch'


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
export function requestAPIToken(credentials){
  return {
    type: REQUEST_API_TOKEN,
    credentials
  }
}

export const RECIEVE_API_TOKEN = 'RECIEVE_API_TOKEN';
export function receiveAPIToken(credentials, token){
  return {
    type: RECIEVE_API_TOKEN,
    credentials,
    token
  }
}

export const fetchAPIToken = (credentials) => {

  return (dispatch, getState) => {
    dispatch(requestAPIToken(credentials));
    
    let path = '/login'
    console.log(credentials)
    return false;
    
    return fetch(`http://localhost:${CORS_PROXY_PORT}/${path}`, {
      method: 'POST',
      headers: {
        'Target-URL': TVDB_HOST
      },
      body: body
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.data)
    })
  }

}







// only good for 24 hours
const TVDB_HOST = "https://api.thetvdb.com"
const API_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODIyNTg0NDEsImlkIjoiaGVsbG93b3JsZGFwcCIsIm9yaWdfaWF0IjoxNDgyMTcyMDQxLCJ1c2VyaWQiOjQ2OTgzOSwidXNlcm5hbWUiOiJteWRyb25lIn0.wgSDjyE71acTh-VaUuX7fPyXbu4oE9pZqz3qabOCQpenQtI0F6YOonkE6QlPAGAf3zNPeExz7LqziLU90Qd47jeN5cKX8-36kwBUxC6FWZkgZIl0rEOavMOZQjncnx0p9B1SY0eODiJ7UyOOGPwkNltiYOjp8EbROx_NWJGWHXzD1H1kfQtq934vugYmn_T3XgRr2MbJl5StD1Um2EwnhiaCZws2EC6-kcJURCxz_OcTslKA37APjWmQq2V-Gf1zpMoKwHSVuBuPURZVuNpv_OsTJa2klxbkAFjqP0X3of0qoq33q_ZnfIA06Mlhid30JSb5mVCxZMuIXYqtaCYE6A"

// when server is running in adjacent folder
const CORS_PROXY_PORT = 3000;



// SEARCH
// initiate api call to search for show by name
export const fetchSearch = () => {

  return (dispatch, getState) => {

    let searchTerm = getState().search.term;
    dispatch(requestSearch(searchTerm));
    
    // TODO write a wrapper for all the repeated boilerplate that returns a Promise
    let path = `/search/series?name=${searchTerm}`;
    return fetch(`http://localhost:${CORS_PROXY_PORT}/${path}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
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
    dispatch(requestShowDetails(id));  
    
    let path = `/series/${id}`;
    return fetch(`http://localhost:${CORS_PROXY_PORT}/${path}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
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


