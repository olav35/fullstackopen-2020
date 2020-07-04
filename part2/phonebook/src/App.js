import React, { useState, useEffect } from 'react'
import AddNumber from './components/AddNumber'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/person'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filteredPersons, setFilteredPersons ] = useState(persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ searchQuery, setSearchQuery ] = useState('')

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewNumberChange = (event) => setNewNumber(event.target.value)

  const handleAddNewPerson = (event) => {
    event.preventDefault()

    let person = persons.find((p) => p.name === newName)
    if(!person)
      personService.create({name: newName, number: newNumber})
                   .then(newPerson => {
                     setPersons([...persons].concat(newPerson))
                     setNotification(`Added ${newPerson.name}`)
                   })
    else if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
      personService.update(person.id, {...person, number: newNumber}).then(newPerson => {
        setPersons(persons.map(innerPerson =>
          innerPerson.id === person.id ? newPerson : innerPerson
        ))
        const message = `Updated ${newPerson.name}`
        setNotification(message)
      }
      )
    }
    setTimeout(() => setNotification(null), 5000)
    setNewName('')
    setNewNumber('')
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
      <Notification message={notification}/>
      <Filter onSearchQueryChange={handleSearchQueryChange}/>
      <AddNumber onNewNameChange={handleNewNameChange}
                 onNewNumberChange={handleNewNumberChange}
                 newNumber={newNumber}
                 newName={newName}
                 onAddNewPerson={handleAddNewPerson}/>
      <Numbers persons={filteredPersons}
               onDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App
