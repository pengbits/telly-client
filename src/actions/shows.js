import {
  INITIAL_SHOWS
} from '../../config/shows';

export const setShows = (shows) => {
  return {
    type: 'SET_SHOWS',
    shows
  }
}

export const getShows = () => {
  return (dispatch, getState) => {
    
    // use seed data if the list is empty...
    const {shows,queue} = getState()
    const list = shows.length && shows[0].seriesName ? addQueueData(shows, queue) : INITIAL_SHOWS
    return dispatch({
      type: 'GET_SHOWS',
      shows: list
    })
  }
}

export const getShowList = () => {
  return (dispatch, getState) => {
    dispatch(getShows())
    // return dispatch({
    //   type: 'GET_SHOW_LIST',
    //   showList: []
    // })
  }
}

const addQueueData = (shows, queue) => {
  return shows.map((s) => {
    s.inQueue = queue.indexOf(s.id) > -1
    return s
  })
}