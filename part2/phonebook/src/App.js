import React, { useState } from 'react'
import Phonebook from './components/Phonebook'
import Numbers from './components/Numbers'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523'}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  return (
    <div>
      <Phonebook newNumber={newNumber} setNewNumber={setNewNumber} setPersons={setPersons} persons={persons} setNewName={setNewName} newName={newName}/>
      <Numbers persons={persons}/>
    </div>
  )
}

export default App
