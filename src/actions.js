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


// onready
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export function receiveSearch(searchTerm, json) {
  return {
    type: RECEIVE_SEARCH,
    searchTerm,
    results: json.data // json.data.map(show => show.data)
  }
}

export const fetchSearch = () =>{
  
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return (dispatch, getState) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    let searchTerm = getState().search.term;
    dispatch(requestSearch(searchTerm));
    
    // simulate latency
    setTimeout(() => {
      dispatch(receiveSearch(searchTerm, {
        "data": [{
          "aliases": [],
          "banner": "graphical/265571-g.jpg",
          "firstAired": "2013-01-07",
          "id": 265571,
          "network": "TV 2",
          "overview": "Dicte is a dedicated reporter and refuses to give up before she has her story. Her stubborness gives her problems immediately with the policeman John Wagner, and they often get into clashes with each other.",
          "seriesName": "Dicte",
          "status": "Continuing"
        }]
      }))
    }, 1000)
  }
}

// skipping past async states for now
export const PERFORM_SEARCH = 'PERFORM_SEARCH'

