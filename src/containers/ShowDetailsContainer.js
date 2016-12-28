import { connect } from 'react-redux'
import { getShowDetails } from '../actions/show'
import { addShowToQueue, removeShowFromQueue } from '../actions/queue'
import ShowDetails from '../components/ShowDetails'

const mapStateToProps = (state) => {
  const {show} = state
  return {show}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id } = ownProps.routeParams;
  return {

    getShowDetails: () => {
      dispatch(getShowDetails(id))
    },
    
    addShowToQueue: () => {
      dispatch(addShowToQueue())
    },
    
    removeShowFromQueue: () => {
      dispatch(removeShowFromQueue())
    }

  }
}

const ShowDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetails)

export default ShowDetailsContainer