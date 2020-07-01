import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './App.css'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => setFilteredCountries(allCountries.filter(country =>
    country.name.toUpperCase().includes(filter.toUpperCase()))),
    [filter, allCountries])


  useEffect(() => {
    Axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({data}) => {
        setAllCountries(data)
      })}
  , [])

  const handleFilterChange = (event) => setFilter(event.target.value)

  return (
    <div>
      <Filter setFilter={setFilter}
              filter={filter}
              handleFilterChange={handleFilterChange}/>
      <Countries countries={filteredCountries}
                 setFilter={setFilter}
                 handleCountrySelection={handleFilterChange}/>
    </div>
  )
}

export default App;
