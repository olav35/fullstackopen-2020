import React from 'react'

const Filter = ({onSearchQueryChange, searchQuery}) => (
  <div>
    filter shown with <input value={searchQuery} onChange={onSearchQueryChange}/>
  </div>
)

export default Filter
