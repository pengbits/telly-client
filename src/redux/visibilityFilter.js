import {createAction} from 'redux-actions'
import {show_statuses} from './shows'
import {reduce} from 'lodash'

export const setVisibilityFilter = (filter) => {
  return {
    'type':'SET_VISIBILITY_FILTER',
    'payload':{
      filter
    }
  }
}
    

export const visibilityFilter = (state = 'all', action) => {

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.filter
    default:
      return state
  }
}
