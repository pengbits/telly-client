import { combineReducers } from 'redux'
import app    from './app'
import shows  from './shows'
import show   from './show'

const rootReducer = combineReducers({
  shows,
  show,
  app
})

export default rootReducer