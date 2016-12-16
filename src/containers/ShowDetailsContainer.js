import { connect } from 'react-redux'
import { requestShowDetails, fetchShowDetails } from '../actions'
import ShowDetails from '../components/ShowDetails'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps && ownProps.routeParams ? ownProps.routeParams : {id:undefined}
  return {
    seriesName: "A Series"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const ShowDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetails)

export default ShowDetailsContainer