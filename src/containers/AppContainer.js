import { connect } from 'react-redux'
import { fetchAPIToken } from '../actions/api'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    token: 'wibble'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAPIToken: () => {
      return dispatch(fetchAPIToken())
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer