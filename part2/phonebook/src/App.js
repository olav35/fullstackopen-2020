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
  const handleDeletePerson = (event) => {
    const id = Number(event.target.value)
    const name = persons.find(person => person.id === id).name
    if(window.confirm(`Delete ${name}`)){
      setPersons(persons.filter(person => person.id !== id))
      personService.remove(id)
    }
  }

  useEffect(() => {personService.getAll().then(persons => setPersons(persons))}, [])

  useEffect(() => setFilteredPersons(persons.filter(person =>
    person.name.toUpperCase().includes(searchQuery.toUpperCase())))
  , [searchQuery, persons])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter onSearchQueryChange={handleSearchQueryChange}/>
      <AddNumber onNewNameChange={handleNewNameChange}
                 onNewNumberChange={handleNewNumberChange}
                 newNumber={newNumber}
                 newName={newName}
                 addNewPerson={addNewPerson}/>
      <Numbers persons={filteredPersons}
               onDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App
