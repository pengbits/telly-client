import React, { Component } from 'react'

const GenreList = ({genre}) => (
  <span className="genre-list">
    {genre.map((genreName,idx) => (
      <span key={idx}>
        {genreName}
        {idx<genre.length-1 ? ', ' : ' '}
      </span>
    ))}
  </span>
)

export default GenreList