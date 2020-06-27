import React, { useState } from 'react'
import Phonebook from './components/Phonebook'
import Numbers from './components/Numbers'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  return (
    <div>
      <Phonebook setPersons={setPersons} persons={persons} setNewName={setNewName} newName={newName}/>
      <Numbers persons={persons}/>
    </div>
  )
}

export default App
