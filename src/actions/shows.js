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
      shows: sortByName(list)
    })
  }
}

const addQueueData = (shows, queue) => {
  return shows.map((s) => {
    s.inQueue = queue.indexOf(s.id) > -1
    return s
  })
}

const sortByName = (shows) => {
  return shows.sort(function(a,b){
    let nameA = stripLeadingThe(a.seriesName.toUpperCase())
    let nameB = stripLeadingThe(b.seriesName.toUpperCase())
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  })
}

const stripLeadingThe = (name) => {
  if(/The|THE\s/.test(name.substr(0,4))){
    return name.slice(3)
  }
  else {
    return name
  }
}