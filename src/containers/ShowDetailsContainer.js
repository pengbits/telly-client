import { connect } from 'react-redux'
import { requestShowDetails, fetchShowDetails } from '../actions/shows'
import ShowDetails from '../components/ShowDetails'

const mapStateToProps = (state) => {
  return {
    seriesName: state.isFetching ? "Loading Series Data..." : state.seriesName,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id } = ownProps.routeParams;
  console.log(id)
  return {
    requestShowDetails,
    
    fetchShowDetails: () => {
      dispatch(fetchShowDetails(id))
    }
  }
}

const ShowDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetails)

export default ShowDetailsContainer