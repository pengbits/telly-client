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
    show
  }
}



// only good for 24 hours
export const API_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODIwMDA4NzEsImlkIjoiaGVsbG93b3JsZGFwcCIsIm9yaWdfaWF0IjoxNDgxOTE0NDcxLCJ1c2VyaWQiOjQ2OTgzOSwidXNlcm5hbWUiOiJteWRyb25lIn0.1zGcREoWKkv_6RRF38LRIq6J9xBZC29zEUKAX6Px17eQ31g9DfRhgT5a1okRPlK2Tz_J8UKqn3PWccjCHGUyeQi_JbGabjawzjSKud1So84x0MGn9Sm6hkBRbNrJYjgG8zCH0RTkFe50O-q5tEvEzty2y0ozlwqmr6IbYVID5PEtUSdwRILRPydS5bB7LUuITRaKhxiftpGmRSTADwyRgOI7aNLqlo73LSVB6xCo5RLOSvVv2jsD6S4uDHe9OMS1qFtKFhHabbPNsbmOjsCFA6rSTbtbOoFv6UNnogDHJbpCeVOrmLdZPi_ETtUt7XxaFnTeuFr-EyGMUKFup-6Kpw";
// when server is running in adjacent folder
export const CORS_PROXY_PORT = 3000;



// SEARCH
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
      if(json.data && json.data.length){
        dispatch(receiveSearch(searchTerm, json.data))
      } else {
        console.log('not quite an error but something went wrong')
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
    console.log(`getting show details for #${id}`)
  }
}


