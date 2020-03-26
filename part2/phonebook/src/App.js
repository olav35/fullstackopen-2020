import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: "12345678"}
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const nameChangeHandler = (event) => setNewName(event.target.value)
  const numberChangeHandler = (event) => setNewNumber(event.target.value)
  const filterChangeHandler = (event) => setFilter(event.target.value)

  const submitHandler = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
    }
    else {
      setPersons([...persons].concat({ name: newName , number: newNumber}))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filter} onChange={filterChangeHandler}/>
      <h2>add a new</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input value={newName} onChange={nameChangeHandler}/>
          <br></br>
          number: <input value={newNumber} onChange={numberChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.filter(person => person.name.indexOf(filter) !== -1).map(person => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          )
          )
        }
      </ul>
    </div>
  )
}

export default App