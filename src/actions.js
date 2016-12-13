import fetch from 'isomorphic-fetch'

// load initial shows into list
export const SET_SHOWS = 'SET_SHOWS'
export function setShows(shows) {
  return {
    type: SET_SHOWS,
    shows
  }
}


// set the search term to use in searches of tvdb
export const SET_SEARCH = 'SET_SEARCH'
export function setSearchTerm(term){
  return {
    type: SET_SEARCH,
    search
  }
}


// prepare the search request 
export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export function requestSearch(search) {
  return {
    type: REQUEST_SEARCH,
    search
  }
}


// onready
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export function receiveSearch(search, json) {
  return {
    type: RECEIVE_SEARCH,
    search,
    results: json.data // json.data.map(show => show.data)
  }
}

// async action creator for the search
export function performSearch(search){
  
  return function(dispatch){
    
    dispatch(requestSearch(search));
    
    // this won't actually work yet because we need to get a token and set in authorize header..
    return fetch(`https://api.thetvdb.com/search/series?name=${search}`)
      then(response => response.json())
      then(json => {
        
          dispatch(receiveSearch)
        
        
      })
  }
}


