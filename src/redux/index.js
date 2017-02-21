import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { shows, show }  from './shows'
import {visibilityFilter} from './visibilityFilter'

const rootReducer = combineReducers({
  form: formReducer,
  show,
  shows,
  visibilityFilter
})

export default rootReducer