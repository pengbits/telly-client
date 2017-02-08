import { connect } from 'react-redux'
import { getShowDetails } from '../actions/show'
import ShowDetails from '../components/ShowDetails'

const mapStateToProps = (state) => {
  const {showDetails,loading,error} = state.show;

  return {
    show: showDetails,
    error,
    loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps.routeParams;

  return {
    getShowDetails: () => {
      dispatch(getShowDetails(id))
    }
  }
}

const ShowDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetails)

export default ShowDetailsContainer