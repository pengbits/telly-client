import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import { createShow, getShowDetails, updateShow } from '../actions/show'
import ShowForm from '../components/ShowForm'


const mapStateToProps = (state, ownProps) => {
  const {showDetails,error,loading} = state.show
  return {
    initialValues: showDetails ? {
      name: showDetails.name,
      network: showDetails.network
    }: {},
    error,
    // our routing error is being clobbered by redux-form, so alias as hasError 
    hasError: !!error, 
    loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps.routeParams;

  return {
    getShowDetails: () => {
      isNew(ownProps) || dispatch(getShowDetails(id))
    },
    
    onSubmit: (show) => {
      dispatch(isNew(ownProps) ? 
        createShow(show) : 
        updateShow(Object.assign({}, show, {
          '_id' : id
        }))
      )
    },
  }
}

const isNew = (ownProps) => {
  return ownProps.route.path.match(/\/edit$/) == null;
}

const ShowFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowForm)

export default ShowFormContainer