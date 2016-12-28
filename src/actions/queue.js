import {
  SET_SHOW_IS_QUEUED
} from './show'

export const ADD_SHOW_TO_QUEUE = 'ADD_SHOW_TO_QUEUE'
export const addShowToQueue = () => {
  
  return (dispatch, getState) => {
    const {show} = getState();
    
    // notify the queue
    dispatch({
      type: ADD_SHOW_TO_QUEUE,
      show
    })
    
    // and the details view
    dispatch({
      type: SET_SHOW_IS_QUEUED,
      show,
      inQueue: true
    })
  }
}

export const REMOVE_SHOW_FROM_QUEUE = 'REMOVE_SHOW_FROM_QUEUE'
export const removeShowFromQueue = () => {
  
  return (dispatch, getState) => {
    const {show} = getState()
    
    // notify the queue
    dispatch({
      type: REMOVE_SHOW_FROM_QUEUE,
      show
    })

    // and the details view
    dispatch({
      type: SET_SHOW_IS_QUEUED,
      show,
      inQueue: false
    })
  }
}