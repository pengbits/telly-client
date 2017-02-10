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
      'body' : show,
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


export const updateShow = (show) => {
  return (dispatch, getState) => {
    
    if(show._id == undefined){
      return dispatch(onUpdateShowError('must provide id for updates'))
    }
    
    dispatch({
      type: 'UPDATE_SHOW',
      loading: true
    })
    fetchJSON(`/shows/${show._id}`, {
      'method' : 'PUT',
      'body' : show,
      'success': (xhr => {
        dispatch(onUpdateShow(xhr.show))
      }),
      'error':   (e => {
        dispatch(onUpdateShowError(e))
      })
    })
  }
}

export const onUpdateShow = (data) => {
  return {
    type: 'UPDATE_SHOW_SUCCESS',
    loading: false,
    showDetails: data
  }
}

export const onUpdateShowError = (error) => {
  return {
    type: 'UPDATE_SHOW_ERROR',
    loading: false,
    error
  }
}


export const deleteShow = (show) => {
  return (dispatch, getState) => {
    
    if(show._id == undefined){
      return dispatch(onUpdateShowError('must provide id for DELETE'))
    }
      
    dispatch({
      type: 'DELETE_SHOW',
      loading: true
    })
    
    fetchJSON(`/shows/${show._id}`, {
      'method' : 'DELETE',
      'success': (xhr => {
        console.log('success')
        console.log(xhr)
        // dispatch(onDeleteShow())
      }),
      'error':   (e => {
        console.log('error')
        console.log(e)
        // dispatch(onDeleteShowError(e))
      })
    })
  }
}

export const onDeleteShow = (data) => {
  return {
    type: 'DELETE_SHOW_SUCCESS',
    loading: false,
    showDetails: data
  }
}

export const onDeleteShowError = (error) => {
  return {
    type: 'DELETE_SHOW_ERROR',
    loading: false,
    error
  }
}