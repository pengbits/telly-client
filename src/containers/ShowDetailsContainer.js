import { connect } from 'react-redux'
import { getShowDetails } from '../redux/shows'
import ShowDetails from '../components/ShowDetails'

const mapStateToProps = (state) => {
  const {showDetails,loading,error,message} = state.show;

  return {
    show: showDetails,
    error,
    loading,
    message
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