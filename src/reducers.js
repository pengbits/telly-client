import { combineReducers } from 'redux'
import {
  SET_SEARCH,
  REQUEST_SEARCH,
  RECIEVE_SEARCH
} from './actions';


function setSearch(state = {}, action){
  switch (action.type){
    case SET_SEARCH:
      return action.search
    default:
      return state
  }
}
