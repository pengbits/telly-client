import React, { PropTypes } from 'react'

const SearchResults = ({ results}) => {
  return (<ul>
    {results && results.map((result) => {
        <li key={result.id}>{result}</li>
      }
    )}
  </ul>)
}

export default SearchResults