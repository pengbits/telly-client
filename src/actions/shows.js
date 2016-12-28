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
    const {shows,queue} = getState()
    const list = shows.length && shows[0].seriesName ? addQueueData(shows, queue) : INITIAL_SHOWS
    return dispatch({
      type: GET_SHOWS,
      shows: list
    })
  }
}

const addQueueData = (shows, queue) => {
  return shows.map((s) => {
    s.inQueue = queue.indexOf(s.id) > -1
    return s
  })
}