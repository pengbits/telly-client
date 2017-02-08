import { connect } from 'react-redux'
import { createShow, updateShow } from '../actions/show'
import ShowForm from '../components/ShowForm'


const isNew = (ownProps) => {
  return ownProps.route.path.match(/\/edit$/) == null;
}

const mapStateToProps = (state, ownProps) => {
  const {showDetails,error,loading} = state.show

  return {
    showDetails,
    error,
    loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
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

const ShowFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowForm)

export default ShowFormContainer