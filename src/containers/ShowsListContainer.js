import { connect } from 'react-redux'
import { selectShow, setShows } from '../actions/shows'
import ShowsList from '../components/ShowsList'

const mapStateToProps = (state) => {
  return {
    shows: state.shows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShows: () => {
      dispatch(setShows())
    },
    
    onShowClick: (e) => {
      e.preventDefault()
      //console.log(e.target)
      //dispatch(selectShow(id))
    }
  }
}

const ShowsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowsList)

export default ShowsListContainer