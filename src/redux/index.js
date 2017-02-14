import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { shows,show }  from './shows'

const rootReducer = combineReducers({
  shows,
  show,
  form: formReducer
})

export default rootReducer