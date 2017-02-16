import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { shows, show }  from './shows'
import { networks, network} from './networks'
const rootReducer = combineReducers({

  shows,
  show,

  networks,
  network,
  
  form: formReducer
})

export default rootReducer