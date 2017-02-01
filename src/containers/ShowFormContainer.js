import { connect } from 'react-redux'
import ShowForm from '../components/ShowForm'

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

  return {}
}

const ShowFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowForm)

export default ShowFormContainer