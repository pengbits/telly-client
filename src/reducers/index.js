import { combineReducers } from 'redux'
import api    from './api'
import app    from './app'
import search from './search'
import shows  from './shows'
import show   from './show'
import queue  from './queue'
import visibilityFilter from './visibilityFilter'
import userRating from './userRating'

const rootReducer = combineReducers({
  search,
  shows,
  show,
  api,
  app,
  queue,
  visibilityFilter,
  userRating
})

export default rootReducer