import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { shows,show }  from './shows'
import { networks } from './networks'
const rootReducer = combineReducers({

  show,
  shows,
  
  networks,

  form: formReducer
})

export default rootReducer