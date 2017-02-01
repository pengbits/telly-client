import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import shows  from './shows'
import show   from './show'

const rootReducer = combineReducers({
  shows,
  show,
  form: formReducer
})

export default rootReducer