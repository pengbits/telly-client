import React, { PropTypes } from 'react'

const SearchForm = ({ search, onSubmit, onChange }) => {
  return (
    <form action="#" onSubmit={onSubmit}>
      <input type="text" defaultValue={search} onChange={onChange} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default SearchForm