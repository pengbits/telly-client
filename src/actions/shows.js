import fetchJSON from '../utils/fetchJSON'

export const setShows = (shows) => {
  return {
    type: 'SET_SHOWS',
    shows
  }
}

export const getShows = () => {
    // we could cache api calls and look in the cache before invoking fetchShows below..
  return (dispatch, getState) => {
    dispatch(fetchShows())
  }
}


export const fetchShows = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'FETCH_SHOWS',
      payload: fetchJSON(`/shows`)
        .then((xhr) => {
          return {shows:xhr.shows}
        })
        .catch((e) => {})
    })
  }
}

export const onFetchShows = (shows) => {
  return {
    type: 'FETCH_SHOWS_SUCCESS',
    loading: false,
    shows
  }
}

export const onFetchShowsError = (error) => {
  return {
    type: 'FETCH_SHOWS_ERROR',
    loading: false,
    error
  }
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