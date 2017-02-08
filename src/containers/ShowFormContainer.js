import { connect } from 'react-redux'
import { createShow } from '../actions/show'
import ShowForm from '../components/ShowForm'

const mapStateToProps = (state) => {
  const {showDetails,error,loading} = state.show
  return {
    showDetails,
    error,
    loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // const {id} = ownProps.routeParams;
  return {
    onSubmit: (show) => {
      dispatch(createShow(show))
    },
  }
}

const ShowFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowForm)

export default ShowFormContainer