import React from 'react'

function Country ({ country }) {
  return (
    <div>
      <h1>{country.name}</h1>
      capital {country.capital}
      <br />
      population {country.population}
      <h2>languages</h2>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img className="flag" alt="flag" src={country.flag}/>
    </div>
  )
}

export default Country