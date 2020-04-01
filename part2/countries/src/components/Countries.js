import React from 'react'

function Countries ({ countries, handleClickCountry }) {
  return countries.map(country => (
    <p key={country.name}>{country.name}<button data-country={country.name} onClick={handleClickCountry}>show</button></p>
  ))
}

export default Countries
