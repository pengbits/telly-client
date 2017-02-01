import fetch from 'isomorphic-fetch'


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
    
    fetch(`http://localhost:3000/shows/${id}`)
      .then((res)=>{
        if(res.status >= 400){
          throw new Error(`${res.status} ${res.statusText}`);
        } else {
          return res.json()
        }
      })
      .then(xhr => {
        dispatch(onFetchShowDetails(xhr.show))
      })
      .catch((error) => {
        dispatch(onFetchShowDetailsError(error.message))
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