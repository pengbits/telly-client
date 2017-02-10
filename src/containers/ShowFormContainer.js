import { connect } from 'react-redux'
import { createShow, getShowDetails, updateShow } from '../actions/show'
import ShowForm from '../components/ShowForm'


const mapStateToProps = (state, ownProps) => {
  const {showDetails,error,loading} = state.show
  const intitialValues = {
    name: 'test name',
    network: 'test network'
  }
  return {
    intitialValues,
    error,
    loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps.routeParams;

  return {
    getShowDetails: () => {
      dispatch(getShowDetails(id))
    },
    
    onSubmit: (show) => {
      console.log(`hello from onSubmit
        show: ${JSON.stringify(show)}
        `)
      dispatch(isNew(ownProps) ? 
        createShow(show) : 
        updateShow(Object.assign({}, show, {
          '_id' : ownProps.params.id //  ugly hack redux-form surely does this for us
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