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

// only good for 24 hours
export const API_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODE4Mjk2MDAsImlkIjoiaGVsbG93b3JsZGFwcCIsIm9yaWdfaWF0IjoxNDgxNzQzMjAwLCJ1c2VyaWQiOjQ2OTgzOSwidXNlcm5hbWUiOiJteWRyb25lIn0.zNEPjXV31Jitg-dv5bDgWf5bcjDVzA8VjYlfrxTzUSwoamiXdvxR7Eo8QX5pOyWff7K7ATouBdXNBTiQL1sYmhFmQBX51WWRJU5mqXmGoGQOUnOPaZ4MvNbR1cUCGyIqqoDISzoHpbTnR5iNgnFJDpNDOMgC4pL3a-kwgKe_FelixAIFS8CL9aZH7057HDgyFqr8XzfzLqHvYbTqYzSOpnBylTCx6ywg8eJGgjdtYheZRYvY3hcfWAWnESc0sInIoh4Wuc1zzRV2w6LkS_OxhgNfXvg51mbblgJYK0ZR61CdlZfiVEKGAe17anARKX64QBL72YlxEFQbD4COc90k0g";
export const fetchSearch = () =>{
  
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return (dispatch, getState) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    let searchTerm = getState().search.term;
    dispatch(requestSearch(searchTerm));
    
    // The function called by the thunk middleware can return a value,
   // that is passed on as the return value of the dispatch method.
   // In this case, we return a promise to wait for.
   // This is not required by thunk middleware, but it is convenient for us.

  return fetch(`https://api.thetvdb.com/search/series?name=${searchTerm}`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`
    }
  })
     .then(response => response.json())
     .then(json => {
       console.log(json)
       dispatch(receiveSearch(searchTerm, json))
     })
     .catch(error => {
       console.log(error)
     })
  }
}

// skipping past async states for now
export const PERFORM_SEARCH = 'PERFORM_SEARCH'

