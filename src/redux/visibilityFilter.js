import {createAction} from 'redux-actions'
import {show_statuses} from './shows'
import {reduce} from 'lodash'


export const filter_options = reduce(show_statuses, (opts,status) => {
  opts[status] = `SHOW_${status.toUpperCase()}`;
  return opts
},{});

export const setVisibilityFilter = (filter) => {
  return {
    'type':'SET_VISIBILITY_FILTER',
    'payload':{
      filter
    }
  }
}
    

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return 'FOO'
    default:
      return state
  }
}
