import { connect } from 'react-redux'
import { getShows} from '../actions/shows'
import ShowsList from '../components/ShowsList'

const getVisibleShows = (shows, filter) => {
  switch (filter) {
    
    case 'SHOW_QUEUED':
      return shows.filter(s => s.inQueue)
    
    case 'SHOW_ENDED':
      return shows.filter(s => {return s.status == 'Ended'})
    
    case 'SHOW_CONTINUING':
      return shows.filter(s => {return s.status == 'Continuing'})
    
    case 'SHOW_ALL':
    default:
      return shows  
  }
}

const mapStateToProps = (state) => {
  return {
    shows: getVisibleShows(state.shows)
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