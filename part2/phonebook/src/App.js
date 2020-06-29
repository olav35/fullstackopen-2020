import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddNumber from './components/AddNumber'
import Numbers from './components/Numbers'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filteredPersons, setFilteredPersons ] = useState(persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchQuery, setSearchQuery ] = useState('')

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewNumberChange = (event) => setNewNumber(event.target.value)
  const filterPersons = (newPersons, searchQuery) => setFilteredPersons(newPersons.filter(person =>
          person.name.toUpperCase().includes(searchQuery.toUpperCase())))

  const addNewPerson = (event) => {
    event.preventDefault()

    if(persons.some((person) => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newPersons = [...persons].concat({name: newName, number: newNumber})
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
      filterPersons(newPersons,searchQuery)
    }
  }

  const handleSearchQueryChange = (event) => {
    filterPersons(persons, event.target.value)
    setSearchQuery(event.target.value)
  }

  useEffect(() =>
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        filterPersons(response.data, searchQuery)
      }), [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter setSearchQuery={setSearchQuery}
              handleSearchQueryChange={handleSearchQueryChange}/>
      <AddNumber handleNewNameChange={handleNewNameChange}
                 handleNewNumberChange={handleNewNumberChange}
                 newNumber={newNumber}
                 newName={newName}
                 addNewPerson={addNewPerson}/>
      <Numbers persons={filteredPersons}/>
    </div>
  )
}

export default App
