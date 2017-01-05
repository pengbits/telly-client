import {initializeApp} from './app'
import fetch from 'isomorphic-fetch'
import API_CREDENTIALS from '../../config/api_credentials'

export const TVDB_HOST = "https://api.thetvdb.com"
export const CORS_PROXY_PORT = 3000;

// get api credentials
export function requestAPIToken(){
  return {
    type: 'REQUEST_API_TOKEN'
  }
}

export function receiveAPIToken(token){
  return {
    type: 'RECEIVE_API_TOKEN',
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

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const parseJSON = (response) => {
  return response.json()
}


export const performFetch = (path, opts={}) => {
  
  let method =  opts.method  || 'GET'
  let headers = opts.headers || {
    'Target-URL': TVDB_HOST
  }
  if(opts.apiToken) {
    headers['Authorization'] = `Bearer ${opts.apiToken}`
  }
  let onReady = opts.ready || ((json) => {
    console.log('api#performFetch:ready')
    console.log(json)
  })
  
  let onError = opts.error || ((error) => {
    console.log('api#performFetch:error')
    console.log(error)
  })
  
  return fetch(`http://localhost:${CORS_PROXY_PORT}${path}`, {
    method,
    headers
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(json => {
    onReady(json)
  })
  .catch(error => {
    onError(error)
  })
  
}