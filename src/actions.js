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



// only good for 24 hours
const TVDB_HOST = "https://api.thetvdb.com"
const API_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODIwMTI1NzEsImlkIjoiaGVsbG93b3JsZGFwcCIsIm9yaWdfaWF0IjoxNDgxOTI2MTcxLCJ1c2VyaWQiOjQ2OTgzOSwidXNlcm5hbWUiOiJteWRyb25lIn0.QsiHM8hExo0t4P-soNS_qXzGCe5GkHfqEfChG_mbQ3crill_ODbfkE_azn7xW6jLmuH7w7IpFwgtrVAw89ZfZgDvxgzAWz4S6iCPuaybcIVM6b61sRFTnHH9VB9_9rPAeN0TrZQEHxBoR5WNLqcRqGU7oJx_Fzs47cqqcSmMOx9lh5-gt4sQt10qTFnk3XKSv9OUU_sNjTLQ25LExjKZrl-VI_fZaOudpwU84UqVmOyZmCKlHxe2NEHFphFqvKY0f9JD6BVZLumHtaNHHiF8jr1gZLS5lkOt64OnAeweRjxFtGu7dqizBNdt2BHbyX1YrL8Hr2dMSn160xSF4PC8DA";

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
      console.log(json.data)
      dispatch(receiveShowDetails(id, json.data))
    })
    .catch(error => {
      console.log(error)
    })
  }
}


