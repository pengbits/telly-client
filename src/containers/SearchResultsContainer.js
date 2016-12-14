import { connect } from 'react-redux'
import SearchResults from '../components/SearchResults'


const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

const SearchResultsContainer = connect(
  mapStateToProps
)(SearchResults)

export default SearchResultsContainer