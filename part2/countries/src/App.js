import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './App.css'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    filterCountries(event.target.value, allCountries)
  }

  const filterCountries = (filter, countries) =>
        setFilteredCountries(countries.filter(country => country.name
                                              .toUpperCase()
                                              .includes(filter.toUpperCase())))

  useEffect(() => {
    Axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({data}) => {
        setAllCountries(data)
        filterCountries(filter, data)
      })}
            // eslint-disable-next-line react-hooks/exhaustive-deps
  , [])

  return (
    <div>
      <Filter setFilter={setFilter}
              filter={filter}
              handleFilterChange={handleFilterChange}/>
      <Countries countries={filteredCountries}/>
    </div>
  )
}

export default App;
