import { connect } from 'react-redux'
import { getShows, deleteShow } from '../redux/shows'
import { filter_options } from '../redux/visibilityFilter'

import ShowsList from '../components/ShowsList'

const getVisibleShows = (shows, filter) => {
  // switch(filter){
    // case 'SHOW_ALL'
  // }
}

const mapStateToProps = (state, ownProps) => {
  const {list,loading,error} = state.shows;
  const {message} = state.show;
  const {filter} =  ownProps.params;

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