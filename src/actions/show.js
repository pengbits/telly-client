import fetchJSON from '../utils/fetchJSON'

export const getShowDetails = (id) => {
    // we could cache api calls and look in the cache before invoking fetchShow below..
  return (dispatch, getState) => {
    dispatch(fetchShowDetails(id))
  }
}

export const fetchShowDetails = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'FETCH_SHOW_DETAILS',
      payload: fetchJSON(`/shows/${id}`)
        .then((xhr) => {
          return xhr
        }, (error) => {
          throw error
        })
    })
  }
}

export const getShowForm = () => {
  return {
    type: 'CREATE_SHOW'
  }
}

export const createShow = (show) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'CREATE_SHOW',
      payload: fetchJSON(`/shows/`, {
        'method' : 'POST',
        'body' : show
      })
      .then(xhr => xhr)
    })
  }
}


export const updateShow = (show) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'UPDATE_SHOW',
      payload: fetchJSON(`/shows/${show._id}`, {
        'method' : 'PUT',
        'body' : show
      })
      .then(xhr => xhr)
    })
  }
}

export const deleteShow = (show) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'DELETE_SHOW',
      payload: fetchJSON(`/shows/${show._id}`, {
        'method' : 'DELETE',
      })
      .then(xhr => xhr)
    })
  }
}
