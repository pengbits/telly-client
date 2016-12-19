import { connect } from 'react-redux'
import {fetchAPIToken} from '../actions'
import API_CREDENTIALS from '../../config/api_credentials'
import App from '../components/App'

// "apikey":"2D128652BABFA237",
// "userkey":"4D7351809F5954BE",
// "username":"mydrone"


  // constructor(){
  //   console.log('hello from API')
  //   Object.assign(this, API_CREDENTIALS)  
  // }
  // 
  // getCredentials(){
  //   return API_CREDENTIALS
  // }
  // 
  // fetch(){
  //   return fetchAPIToken(this.getCredentials())
  // }
  // 
  // getApiKey(){
  //   return this.apikey
  // }
  // 
  // getUserKey(){
  //   return this.userkey
  // }
  // 
  // getUserName(){
  //   return this.username
  // }
  
  const mapStateToProps = (state) => {
    return {
      token: 'wibble'
    }
  }

  const mapDispatchToProps = (dispatch) => {
    const fetchAPIToken = (credentials) => {
      console.log('[mapDispatch] #fetchAPIToken')
      //dispatch(fetchAPIToken(credentials))
    }
  }

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer