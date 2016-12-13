import { connect } from 'react-redux'
import { setSearchTerm } from '../actions'
import SearchForm from '../components/SearchForm'

const mapStateToProps = (state) => {
  console.log(state.search)
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {

  const onSubmit = (term) => {
    dispatch(setSearchTerm(term))
    // dispatch(requestSearch(term))  
  }
  
  return {
    onChange: setSearchTerm,
    onSubmit: onSubmit
  }
}

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)

export default SearchFormContainer