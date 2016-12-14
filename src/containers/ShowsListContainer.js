import { connect } from 'react-redux'
import { selectShow, setShows } from '../actions'
import ShowsList from '../components/ShowsList'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    shows: state.shows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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