import React from 'react'

const Filter = ({setSearchQuery, searchQuery, persons, setFilteredPersons}) => {
  const handleSearchQueryChange = (event) => {
    setFilteredPersons(persons.filter(person => person.name.toUpperCase().includes(event.target.value.toUpperCase())))
    setSearchQuery(event.target.value)
  }

  return (
      <div>
        filter shown with <input value={searchQuery} onChange={handleSearchQueryChange}/>
      </div>
  )
}

export default Filter
