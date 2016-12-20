import {
  REQUEST_SHOW_DETAILS,
  RECEIVE_SHOW_DETAILS
} from '../actions/show';

const show = (state={}, action={}) => {
  switch (action.type){
    
    case REQUEST_SHOW_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      })
      
    case RECEIVE_SHOW_DETAILS:  

      return Object.assign({}, state, {
        isFetching: false,
        inQueue: action.inQueue
      }, 
      action.show)
      
    default:
      return state
  }
}

export default show