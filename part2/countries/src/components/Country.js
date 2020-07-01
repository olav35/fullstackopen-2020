import React from 'react'

const Country = ({country}) => (
  <div>
    <h1>{country.name}</h1>
    capital {country.capital}
    <br/>
    population {country.population}
    <h2>languages</h2>
    <ul>
      {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
    </ul>
    <img alt={`${country.name}'s flag`} src={country.flag} height={300}></img>
  </div>
)

export default Country
