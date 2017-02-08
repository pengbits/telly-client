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
      loading: true
    })
    
    fetchJSON(`/shows/${id}`, {
      'success': (xhr => {
        dispatch(onFetchShowDetails(xhr.show))
      }),
      'error' :  (e => {
        dispatch(onFetchShowDetailsError(e.message))
      })
    })
  }
}

export const onFetchShowDetails = (data) => {
  return {
    type: 'FETCH_SHOW_DETAILS_SUCCESS',
    loading: false,
    showDetails: data
  }
}

export const onFetchShowDetailsError = (error) => {
  return {
    type: 'FETCH_SHOW_DETAILS_ERROR',
    loading: false,
    error
  }
}

export const createShow = (show) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CREATE_SHOW',
      loading: true
    })
    fetchJSON(`/shows/`, {
      'method' : 'POST',
      'body' : {
        show
      },
      'success': (xhr => {
        dispatch(onCreateShow(xhr.show))
      }),
      'error':   (e => {
        dispatch(onCreateShowError(e))
      })
    })
  }
}

export const onCreateShow = (data) => {
  return {
    type: 'CREATE_SHOW_SUCCESS',
    loading: false,
    showDetails: data
  }
}

export const onCreateShowError = (error) => {
  return {
    type: 'CREATE_SHOW_ERROR',
    loading: false,
    error
  }
}