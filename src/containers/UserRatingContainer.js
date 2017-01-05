import { connect } from 'react-redux'
import { setUserRating, getUserRating } from '../actions/userRating'
import UserRating from '../components/UserRating'

const mapStateToProps = (state) => {
  return {
    userRating
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const UserRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRating)

export default UserRatingContainer
