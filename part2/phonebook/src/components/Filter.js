import React from "react"

const Filter = ({filter, filterChangeHandler}) => (
  <div>
    <label>filter shown with</label>
    <input value={filter} onChange={filterChangeHandler}/>
  </div>
)

export default Filter