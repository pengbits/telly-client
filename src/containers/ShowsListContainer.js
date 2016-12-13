import { connect } from 'react-redux'
import { selectShow } from '../actions'
import ShowsList from '../components/ShowsList'

const mapStateToProps = (state) => {
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