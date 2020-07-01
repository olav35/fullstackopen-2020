import React from 'react'
import Country from './Country'

const Countries = ({countries, handleCountrySelection}) => {
  if (countries.length === 1) return <Country country={countries[0]}/>
  else if (countries.length <= 10)
    return countries.map(country => (
      <div key={country.name}>
        <p>{country.name}</p>
        <button value={country.name} onClick={handleCountrySelection}>show</button>
      </div>))
  else return <p>Too many matches, specify another filter</p>
}

export default Countries
