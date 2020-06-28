import React, { useState } from 'react'
import AddNumber from './components/AddNumber'
import Numbers from './components/Numbers'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523'}
  ])
  const [ filteredPersons, setFilteredPersons ] = useState(persons) // maybe [...persons]
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchQuery, setSearchQuery ] = useState('')

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter setSearchQuery={setSearchQuery} searchQuery={searchQuery} persons={persons} setFilteredPersons={setFilteredPersons}/>
      <AddNumber searchQuery={searchQuery} setFilteredPersons={setFilteredPersons} newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons} persons={persons} setNewName={setNewName} newName={newName}/>
      <Numbers persons={filteredPersons}/>
    </div>
  )
}

export default App
