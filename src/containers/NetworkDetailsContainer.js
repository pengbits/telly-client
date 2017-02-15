import { connect } from 'react-redux'
import { getNetworkDetails } from '../redux/networks'
import NetworkDetails from '../components/NetworkDetails'

const mapStateToProps = (state) => {
  const {networkDetails,loading,error} = state.network;
  
  return {
    network: networkDetails,
    error,
    loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps.routeParams;

  return {
    getNetworkDetails: () => {
      dispatch(getNetworkDetails(id))
    }
  }
}

const NetworkDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkDetails)

export default NetworkDetailsContainer