import { connect } from 'react-redux'
import { getShows} from '../actions/shows'
import ShowsList from '../components/ShowsList'


const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    isFetching: state.app.isFetching,
    hasErrors: state.app.hasErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShows: () => {
      dispatch(getShows())
    }
  }
}

const ShowsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowsList)

export default ShowsListContainer