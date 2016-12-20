import fetch from 'isomorphic-fetch'
import {CORS_PROXY_PORT, TVDB_HOST} from './api'

export const SET_SHOWS = 'SET_SHOWS'
export function setShows(shows) {
  return {
    type: SET_SHOWS,
    shows
  }
}


export const GET_SHOWS = 'GET_SHOWS'
export function getShows() {
  return {
    type: GET_SHOWS
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

// add show to watch list
export const ADD_SHOW_TO_QUEUE = 'ADD_SHOW_TO_QUEUE'
export function addShowToQueue() {
  
  return (dispatch, getState) => {
    const {show} = getState();
    
    return dispatch({
      type: ADD_SHOW_TO_QUEUE,
      show
    })
  }
}

