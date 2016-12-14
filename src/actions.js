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
// export function requestSearch(searchTerm) {
//   return {
//     type: REQUEST_SEARCH,
//     searchTerm
//   }
// }


// onready
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
// export function receiveSearch(search, json) {
//   return {
//     type: RECEIVE_SEARCH,
//     search,
//     results: json.data // json.data.map(show => show.data)
//   }
// }

// skipping past async states for now
export const PERFORM_SEARCH = 'PERFORM_SEARCH'
export function performSearch(){
  return {
    type: PERFORM_SEARCH,
    results: [{
      "aliases": [],
      "banner": "graphical/265571-g.jpg",
      "firstAired": "2013-01-07",
      "id": 265571,
      "network": "TV 2",
      "overview": "Dicte is a dedicated reporter and refuses to give up before she has her story. Her stubborness gives her problems immediately with the policeman John Wagner, and they often get into clashes with each other.",
      "seriesName": "Dicte",
      "status": "Continuing"
    }]
  }
}


