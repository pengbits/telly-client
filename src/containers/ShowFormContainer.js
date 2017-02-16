import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import { createShow, getShowDetails, getShowForm, updateShow, deleteShow } from '../redux/shows'
import ShowForm from '../components/ShowForm'


const mapStateToProps = (state, ownProps) => {
  const {showDetails,error,loading,message} = state.show
  return {
    initialValues: Object.assign({}, 
      showDetails || {}),
    
    id: showDetails ? 
      showDetails._id : null,
    
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
    getShowDetails: () => {
      dispatch(isNew(ownProps) ?
        getShowForm() :
        getShowDetails(id)
      )
    },
    
    deleteShow: (id, router) => {
      dispatch(deleteShow({
        '_id': id
      }))
      .then(() => {
        history.push(`/shows`); // deprecation warning...
      })
    },
    
    onSubmit: (show) => {
      if(isNew(ownProps)){
        dispatch(createShow(show)).then(() => {
          history.push('/shows')
        })
      } 
      else 
      {
        const attrs = Object.assign({}, show, {
          '_id' : id
        });
        
        dispatch(updateShow(attrs))
      }
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