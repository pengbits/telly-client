import { connect } from 'react-redux'
import { setSearchTerm,performSearch } from '../actions'
import SearchForm from '../components/SearchForm'

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {

  const onSubmit = (term) => {
    console.log('|formContainer| onSubmit: '+term)
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