import React, { PropTypes } from 'react'

const SearchForm = ({ searchTerm, onSubmit, onChange, isFetching }) => {
  let textInput;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(textInput.value);
  }
  
  return (
    <div>
      <h1>Search: {isFetching && 
          <span>...</span>
      }</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a Series" ref={(i) => textInput = i} />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default SearchForm