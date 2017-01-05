import React, { PropTypes } from 'react'
import Show from './Show'
import ShowsList from './ShowsList'

const SearchForm = ({ searchTerm, results, onSubmit, onChange, isFetching }) => {
  let textInput;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(textInput.value);
  }
  
  return (
    <div>
      <h1>Search {isFetching && 
          <span>...</span>
      }</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a Series" ref={(i) => textInput = i} />
        <input type="submit" value="Submit" />
      </form>
      {results && results.length &&
        <ul className="show-list">
          {results.map((show,idx) => (
            <Show 
              key={idx} 
              id={show.id} 
              name={show.seriesName}
            />
          ))}
        </ul>
      }
      {results && !results.length && 
        <p>No results found.</p>
      }
    </div>
  )
}

export default SearchForm