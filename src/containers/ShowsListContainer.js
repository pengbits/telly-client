import { connect } from 'react-redux'
import { getShows } from '../actions/shows'
import { deleteShow } from '../actions/show'
import ShowsList from '../components/ShowsList'

const mapStateToProps = (state) => {
  const {list,loading,error} = state.shows;
  const {message} = state.show;
  
  return {
    shows: list,
    error,
    loading,
    message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShows: () => {
      dispatch(getShows())
    },
    deleteShow: (id) => {
      dispatch(deleteShow({
        '_id': id
      }))
    }
  }
}

const ShowsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowsList)

export default ShowsListContainer