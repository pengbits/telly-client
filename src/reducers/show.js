import {
  REQUEST_SHOW_DETAILS,
  RECEIVE_SHOW_DETAILS,
  SET_SHOW_IS_QUEUED
} from '../actions/show';

const show = (state={}, action={}) => {
  switch (action.type){
    
    case REQUEST_SHOW_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      })
      
    case RECEIVE_SHOW_DETAILS:  
      return Object.assign({}, state, {
        isFetching: false      
      }, 
      action.show)
      
    case SET_SHOW_IS_QUEUED: 
      return Object.assign({}, state, { 
        inQueue: action.inQueue
      })
    
    default:
      return state
  }
}

export default show