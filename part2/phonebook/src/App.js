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

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewNumberChange = (event) => setNewNumber(event.target.value)

  const addNewPerson = (event) => {
    event.preventDefault()

    if(persons.some((person) => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      const newPersons = [...persons].concat({name: newName, number: newNumber})
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
      setFilteredPersons(newPersons.filter(person => person.name.toUpperCase().includes(searchQuery.toUpperCase())))
    }
  }

  const handleSearchQueryChange = (event) => {
    setFilteredPersons(persons.filter(person => person.name.toUpperCase().includes(event.target.value.toUpperCase())))
    setSearchQuery(event.target.value)
  }

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
