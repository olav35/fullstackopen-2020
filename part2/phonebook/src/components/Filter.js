import React from 'react'

const Filter = ({handleSearchQueryChange, searchQuery}) => {
  return (
      <div>
        filter shown with <input value={searchQuery} onChange={handleSearchQueryChange}/>
      </div>
  )
}

export default Filter
