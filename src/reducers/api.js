import {
  REQUEST_API_TOKEN,
  RECEIVE_API_TOKEN
} from '../actions/api';

const api = (state={}, action) => {
  switch (action.type){
    
    case REQUEST_API_TOKEN:
      return Object.assign({}, state, {
        credentials: action.credentials
      })
      
    case RECEIVE_API_TOKEN:
      return Object.assign({}, state, {
        credentials: action.credentials,
        token: action.token
      })
    
    default:
      return state
  }
}

export default api