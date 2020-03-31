import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FindCountries from './components/FindCountries'
import Countries from './components/Countries'
import Country from './components/Country'

function App () {
  const [countries, setCountries] = useState([])
  const [foundCountries, setFoundCountries] = useState([])
  const [findCountries, setFindCountries] = useState('')

  useEffect(() => { axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => setCountries(response.data))
  }, [])

  useEffect(() => {
    setFoundCountries(
      countries.filter(country =>
        country.name.toLowerCase().indexOf(findCountries.toLowerCase()) !== -1
      )
    )
  }, [findCountries, countries])

  const handleFindCountries = (event) => {
    setFindCountries(event.target.value)
  }
  return (
    <div>
      <FindCountries handleFindCountries={handleFindCountries} />
      {
        foundCountries.length === 0 ? <p>Type text to search for a country</p>
          : foundCountries.length === 1 ? <Country country={foundCountries[0]}/>
            : foundCountries.length < 10 ? <Countries countries={foundCountries}/>
              : <p>Too many matches, specify another filter</p>
      }
    </div>
  )
}

export default App
