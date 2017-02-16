import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import { newNetwork, createNetwork, getNetworkDetails, updateNetwork, deleteNetwork } from '../redux/networks'
import NetworkForm from '../components/NetworkForm'


const mapStateToProps = (state, ownProps) => {
  const {networkDetails,error,loading,message} = state.network
  return {
    initialValues: Object.assign({},
      networkDetails || {}),
    
    id: networkDetails ? 
      networkDetails._id : null,
    
    error,
    // our routing error is being clobbered by redux-form, so alias as hasError below
    hasError: !!error, 
    loading,
    isNew: isNew(ownProps),
    message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps.routeParams;
  const {history} = ownProps;
  
  return {
    getNetworkDetails: () => {
      dispatch(isNew(ownProps) ?
        newNetwork() :
        getNetworkDetails(id)
      )
    },
    
    deleteNetwork: (id, router) => {
      dispatch(deleteNetwork({
        '_id': id
      }))
      .then(() => {
        history.push(`/networks`); // deprecation warning...
      })
    },
    
    onSubmit: (network) => {
      if(isNew(ownProps)){
        dispatch(createNetwork(network)).then(() => {
          history.push('/networks')
        })
      } 
      else 
      {
        const attrs = Object.assign({}, network, {
          '_id' : id
        });
        
        dispatch(updateNetwork(attrs))
      }
    },
  }
}

const isNew = (ownProps) => {
  return ownProps.route.path.match(/\/edit$/) == null;
}

const NetworkFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkForm)

export default NetworkFormContainer