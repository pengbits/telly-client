import {initializeApp} from './app'
import fetch from 'isomorphic-fetch'
import API_CREDENTIALS from '../../config/api_credentials'

export const TVDB_HOST = "https://api.thetvdb.com"
export const CORS_PROXY_PORT = 3000;

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
        apikey:   API_CREDENTIALS.apikey,
        userkey:  API_CREDENTIALS.userkey,
        username: API_CREDENTIALS.username
      })
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveAPIToken(json.token));
    })
    .then(() => {
      dispatch(initializeApp())
    })
  }
}