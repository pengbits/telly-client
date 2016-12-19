import fetch from 'isomorphic-fetch'

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
