import { connect } from 'react-redux'
import { setSearchTerm,performSearch } from '../actions'
import SearchForm from '../components/SearchForm'

const mapStateToProps = (state) => {
  const search = state.search;
//  console.log(search.results && search.results.length ? search.results[0].seriesName : undefined)
  return {
    searchTerm: search.term,
    results: search.results
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