import { combineReducers } from 'redux'
import shows  from './shows'
import show   from './show'

const rootReducer = combineReducers({
  shows,
  show
})

export default rootReducer