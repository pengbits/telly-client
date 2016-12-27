export const ADD_SHOW_TO_QUEUE = 'ADD_SHOW_TO_QUEUE'
export const addShowToQueue = () => {
  
  return (dispatch, getState) => {
    const {show} = getState();
    
    dispatch({
      type: ADD_SHOW_TO_QUEUE,
      show
    })
  }
}

export const REMOVE_SHOW_FROM_QUEUE = 'REMOVE_SHOW_FROM_QUEUE'
export const removeShowFromQueue = () => {
  
  return (dispatch, getState) => {
    const {show} = getState()
    
    dispatch({
      type: REMOVE_SHOW_FROM_QUEUE,
      show
    })
  }
}

