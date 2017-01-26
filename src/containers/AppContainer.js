import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    ready: state.app && state.app.ready
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