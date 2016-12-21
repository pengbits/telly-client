import {performFetch} from './api'

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
    
    dispatch(requestSearch(searchTerm));
    
    return performFetch(`/search/series?name=${searchTerm}`, {
      apiToken: getState().api.token,
      ready: (results => {
        if(results.data && results.data.length){
          dispatch(receiveSearch(searchTerm, results.data))
        } else {
          console.log('something went wrong')
        }
      }),
      error: (error => {
        // do stuff
        console.log(error) 
      })
    })
    
  }
}


