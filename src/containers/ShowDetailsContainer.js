import { connect } from 'react-redux'
import { requestShowDetails, fetchShowDetails } from '../actions/show'
import { addShowToQueue } from '../actions/queue'
import ShowDetails from '../components/ShowDetails'

const mapStateToProps = (state) => {
  const {show} = state
  return {show}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id } = ownProps.routeParams;
  return {

    fetchShowDetails: () => {
      dispatch(fetchShowDetails(id))
    },
    
    requestShowDetails: () => {
      dispatch(requestShowDetails())
    },
    
    addShowToQueue: () => {
      dispatch(addShowToQueue())
    },
    
    removeShowFromQueue: () => {
      //dispatch(removeShowFromQueue())
    }

  }
}

const ShowDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetails)

export default ShowDetailsContainer