import { connect } from 'react-redux'
import { fetchAPIToken } from '../actions'
import API_CREDENTIALS from '../../config/api_credentials'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    token: 'wibble'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAPIToken: () => {
      console.log('[mapDispatch] #fetchAPIToken')
      dispatch(fetchAPIToken(API_CREDENTIALS))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer