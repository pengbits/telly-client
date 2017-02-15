import { connect } from 'react-redux'
import { getNetworks } from '../redux/networks'
import NetworksList from '../components/NetworksList'

const mapStateToProps = (state) => {
  const {list,loading,error} = state.networks;
  const {message} = state.network || {};
  
  return {
    networks: list,
    error,
    loading,
    message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNetworks: () => {
      dispatch(getNetworks())
    },
    deleteNetwork: (id) => {
    //   dispatch(deleteNetwork({
    //     '_id': id
    //   }))
    }
  }
}

const NetworksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworksList)

export default NetworksListContainer