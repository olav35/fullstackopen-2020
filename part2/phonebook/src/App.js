import React, { useState } from "react"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import Persons from "./components/Persons"

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: "12345678"}
  ])

  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ filter, setFilter ] = useState("")

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
      <Filter filter={filter} filterChangeHandler={filterChangeHandler}/> 
      <h3>Add a new</h3>
      <PersonForm submitHandler={submitHandler}
                  newName={newName}
                  nameChangeHandler={nameChangeHandler}
                  newNumber={newNumber}
                  numberChangeHandler={numberChangeHandler}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App