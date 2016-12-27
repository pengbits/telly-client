import {
  INITIAL_SHOWS
} from '../../config/shows';

export const SET_SHOWS = 'SET_SHOWS'
export function setShows(shows) {
  return {
    type: SET_SHOWS,
    shows
  }
}

export const GET_SHOWS = 'GET_SHOWS'
export function getShows() {
  return (dispatch, getState) => {
    
    // use seed data if the list is empty...
    const {shows} = getState()
    const list = shows.length ? shows : INITIAL_SHOWS
    
    return dispatch({
      type: GET_SHOWS,
      shows: list
    })
  }
}

export const SET_SHOW_IS_QUEUED = 'SET_SHOW_IS_QUEUED'

// add show to watch list
export const ADD_SHOW_TO_QUEUE = 'ADD_SHOW_TO_QUEUE'
export function addShowToQueue() {
  
  return (dispatch, getState) => {
    const {show} = getState();
    
    dispatch({
      type: ADD_SHOW_TO_QUEUE,
      show
    })
    
    dispatch({
      type: SET_SHOW_IS_QUEUED,
      show,
      inQueue: true
    })
  }
}

export const REMOVE_SHOW_FROM_QUEUE = 'REMOVE_SHOW_FROM_QUEUE'
export const removeShowFromQueue = () => {
  
  return (dispatch, getState) => {
    const {show} = getState()
    
    dispatch({
      type: REMOVE_SHOW_FROM_QUEUE,
      show
    })
    
    dispatch({
      type: SET_SHOW_IS_QUEUED,
      show,
      inQueue: false
    })
  }
}

