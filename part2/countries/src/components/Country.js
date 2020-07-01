import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Country = ({country}) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
          .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
          .then((response) => setWeather(response.data.current))
  }, [country.capital])
  return (
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
        { weather ? (
            <div>
              <h2>Weather in {country.name}</h2>
              <b>temperature:</b> {weather.temperature} celsius
              <br/>
              <img alt={weather.weather_descriptions} src={weather.weather_icons}/>
              <br/>
              <b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}
            </div>
        )
          : (<p>Loading weather</p>)}
    </div>
  )
}

export default Country
