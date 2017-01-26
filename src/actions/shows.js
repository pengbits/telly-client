import fetch from 'isomorphic-fetch'
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
    
    dispatch(requestShows());
    
    setTimeout(() => {
      dispatch(receiveShows([{
        name: 'The OA',
        network: 'Netflix'
      },{
        name: 'Chewing Gum',
        network: 'E4'
      }]))
    }, 2000)
  }
}

export const requestShows = () => {
  return {
    type: 'REQUEST_SHOWS'
  }
}

export const receiveShows = (shows) => {
  return {
    type: 'RECEIVE_SHOWS',
    shows
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