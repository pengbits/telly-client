import fetchJSON from '../utils/fetchJSON'

//
// action constants
// ----------------------------------------------------------------------------

//
// reducers
// ----------------------------------------------------------------------------
export const shows = (state = {list: [], loading:false}, action) => {
  switch (action.type){
    case 'FETCH_SHOWS_LOADING':
      return {
        list: [],
        loading: true
      }
    case 'FETCH_SHOWS_SUCCESS':
      return {
        list: action.payload.shows,
        loading: false
      }
    case 'DELETE_SHOW_SUCCESS':
      return {
        list: state.list.filter(show => {
          return show._id !== action.payload.show._id
        }),
        loading: false
      }
    case 'FETCH_SHOWS_ERROR':
      return {
        list: [],
        loading: false,
        error: action.error
      }
      
    default:
      return state
  }
}

export const show = (state={showDetails:{}, loading:false}, action={}) => {
  switch (action.type){
    case 'FETCH_SHOW_DETAILS_LOADING':
      return {
        loading: true
      }
    case 'FETCH_SHOW_DETAILS_SUCCESS': 
      return {
        loading: false,
        showDetails: action.payload.show
      }
    case 'CREATE_SHOW':
      return {
        loading: false
      }
    case 'CREATE_SHOW_SUCCESS':
      return {
        loading: false,
        message: 'Your changes have been saved'
      }
    case 'UPDATE_SHOW_SUCCESS':
      return {
        loading: false,
        message: 'Your changes have been saved',
        showDetails: action.payload.show
      }
    case 'DELETE_SHOW_SUCCESS':
      return {
        loading: false,
        message: 'The requested show has been deleted'
      }
    case 'FETCH_SHOW_DETAILS_ERROR':
    case 'CREATE_SHOW_ERROR':
    case 'UPDATE_SHOW_ERROR':
      return {
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}


//
// action creators
// ----------------------------------------------------------------------------
export const getShows = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'FETCH_SHOWS',
      payload: fetchJSON(`/shows`)
        .then((xhr) => {
          return xhr
        }, (error) => {
          throw error
        })
    })
    .catch(e => {
      console.log(e)
    })
  }
}

export const getShowDetails = (id) => {
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