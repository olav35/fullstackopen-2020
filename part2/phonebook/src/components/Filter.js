import React from "react"

const Filter = ({filter, handleFilterChange}) => (
  <div>
    <label>filter shown with</label>
    <input value={filter} onChange={handleFilterChange}/>
  </div>
)

export default Filter