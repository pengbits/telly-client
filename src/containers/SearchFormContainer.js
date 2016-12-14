import { connect } from 'react-redux'
import { setSearchTerm,performSearch } from '../actions'
import SearchForm from '../components/SearchForm'

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {

  const onSubmit = (term) => {
    dispatch(setSearchTerm(term))
    dispatch(performSearch(term))  
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