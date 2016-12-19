import { combineReducers } from 'redux'
import api from './api'
import search from './search'
import {shows,show} from './shows'

const rootReducer = combineReducers({
  search,
  shows,
  show,
  api
})

export default rootReducer

