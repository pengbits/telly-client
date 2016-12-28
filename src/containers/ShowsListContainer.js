import { connect } from 'react-redux'
import { selectShow, setShows, getShows, getShowList} from '../actions/shows'
import ShowsList from '../components/ShowsList'

const mapStateToProps = (state) => {
  return {
    showList: state.showList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShowList: () => {
      dispatch(getShowList())
    }
  }
}

const ShowsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowsList)

export default ShowsListContainer