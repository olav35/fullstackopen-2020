import React from "react"

function FindCountries({handleFindCountries}) {
  return (
    <div>find countries <input onChange={handleFindCountries}/></div>
  )
}

export default FindCountries