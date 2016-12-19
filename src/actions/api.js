import fetch from 'isomorphic-fetch'

const TVDB_HOST = "https://api.thetvdb.com"
const CORS_PROXY_PORT = 3000;

// get api credentials
export const REQUEST_API_TOKEN = 'REQUEST_API_TOKEN';
export function requestAPIToken(){
  return {
    type: REQUEST_API_TOKEN
  }
}

export const RECEIVE_API_TOKEN = 'RECEIVE_API_TOKEN';
export function receiveAPIToken(token){
  return {
    type: RECEIVE_API_TOKEN,
    token
  }
}

export const fetchAPIToken = (credentials) => {

  return (dispatch, getState) => {
    dispatch(requestAPIToken());
    
    let path = '/login'
    return fetch(`http://localhost:${CORS_PROXY_PORT}${path}`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Target-URL': TVDB_HOST
      },
      // this is not being read by the proxy server for some reason..
      // we actually resorted to hard-coding the same credentials 
      // into the server app, and add them to the fetch in the server layer,
      // if the path is `/login`
      body: JSON.stringify({
        apikey:   credentials.apikey,
        userkey:  credentials.userkey,
        username: credentials.username
      })
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveAPIToken(json.token))
    })
  }
}