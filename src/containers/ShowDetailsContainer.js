import { connect } from 'react-redux'
import { requestShowDetails, fetchShowDetails } from '../actions/shows'
import ShowDetails from '../components/ShowDetails'

const mapStateToProps = (state) => {
  console.log(state)
  return Object.assign({}, state)
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id } = ownProps.routeParams;

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