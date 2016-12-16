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
export function receiveSearch(searchTerm, results) {
  return {
    type: RECEIVE_SEARCH,
    searchTerm,
    results
  }
}

// only good for 24 hours
export const API_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODIwMDA4NzEsImlkIjoiaGVsbG93b3JsZGFwcCIsIm9yaWdfaWF0IjoxNDgxOTE0NDcxLCJ1c2VyaWQiOjQ2OTgzOSwidXNlcm5hbWUiOiJteWRyb25lIn0.1zGcREoWKkv_6RRF38LRIq6J9xBZC29zEUKAX6Px17eQ31g9DfRhgT5a1okRPlK2Tz_J8UKqn3PWccjCHGUyeQi_JbGabjawzjSKud1So84x0MGn9Sm6hkBRbNrJYjgG8zCH0RTkFe50O-q5tEvEzty2y0ozlwqmr6IbYVID5PEtUSdwRILRPydS5bB7LUuITRaKhxiftpGmRSTADwyRgOI7aNLqlo73LSVB6xCo5RLOSvVv2jsD6S4uDHe9OMS1qFtKFhHabbPNsbmOjsCFA6rSTbtbOoFv6UNnogDHJbpCeVOrmLdZPi_ETtUt7XxaFnTeuFr-EyGMUKFup-6Kpw";
// when server is running in adjacent folder
export const CORS_PROXY_PORT = 3000;

// initiate api call to search for show by name
export const fetchSearch = () => {

  return (dispatch, getState) => {

    let searchTerm = getState().search.term;
    dispatch(requestSearch(searchTerm));

    let url = `https://api.thetvdb.com/search/series?name=${searchTerm}`;
    console.log(`fetching proxy'd GET of ${url}....`);

    return fetch(`http://localhost:${CORS_PROXY_PORT}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Target-URL': url
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.data)
      dispatch(receiveSearch(searchTerm, json.data))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

// skipping past async states for now
export const PERFORM_SEARCH = 'PERFORM_SEARCH'

