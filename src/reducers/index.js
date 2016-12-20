import { combineReducers } from 'redux'
import api from './api'
import app from './app'
import search from './search'
import {shows,show} from './shows'

const rootReducer = combineReducers({
  search,
  shows,
  show,
  api,
  app
})

export default rootReducer

