import { connect } from 'react-redux'
import { getShows, deleteShow } from '../actions/shows'
import ShowsList from '../components/ShowsList'


const mapStateToProps = (state) => {
  const {list,loading,error} = state.shows;
  
  return {
    shows: list,
    error,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShows: () => {
      dispatch(getShows())
    },
    deleteShow: (id) => {
      console.log(`deleteShow ${id}`)
      return
      
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