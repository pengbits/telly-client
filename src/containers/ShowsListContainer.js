import { connect } from 'react-redux'
import { selectShow, setShows } from '../actions'
import ShowsList from '../components/ShowsList'

const mapStateToProps = (state) => {
  return {
    shows: state.shows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {
      dispatch(setShows())
    },
    onTodoClick: (id) => {
      dispatch(selectShow(id))
    }
  }
}

const ShowsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowsList)

export default ShowsListContainer