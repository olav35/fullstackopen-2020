import React, { useState, useEffect } from 'react'
import AddNumber from './components/AddNumber'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import personService from './services/person'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filteredPersons, setFilteredPersons ] = useState(persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const [ searchQuery, setSearchQuery ] = useState('')

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewNumberChange = (event) => setNewNumber(event.target.value)

  const addNewPerson = (event) => {
    event.preventDefault()

    if(persons.some((person) => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      personService.create({name: newName, number: newNumber})
        .then(newPerson => {
          setPersons([...persons].concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleSearchQueryChange = (event) => setSearchQuery(event.target.value)

  useEffect(() => {personService.getAll().then(persons => setPersons(persons))}, [])

  useEffect(() => setFilteredPersons(persons.filter(person =>
    person.name.toUpperCase().includes(searchQuery.toUpperCase())))
  , [searchQuery, persons])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleSearchQueryChange={handleSearchQueryChange}/>
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
