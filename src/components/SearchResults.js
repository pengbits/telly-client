// not in use
import React, { PropTypes } from 'react'

const SearchResults = ({ results}) => {
  console.log(results)
  return (<ul>
    {results && results.map((result) => {
        <li key={result.id}>{result}</li>
      }
    )}
  </ul>)
}

export default SearchResults