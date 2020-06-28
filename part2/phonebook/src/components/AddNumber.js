import React from 'react'

const AddNumber = ({setFilteredPersons, searchQuery, setNewName, setPersons, newName, persons, newNumber, setNewNumber}) => {
  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewNumberChange = (event) => setNewNumber(event.target.value)
  const addNewPerson = (event) => {
    event.preventDefault()

    const newPersons = [...persons].concat({name: newName, number: newNumber})
    if(persons.some((person) => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
    }
    setFilteredPersons(newPersons.filter(person => person.name.toUpperCase().includes(searchQuery.toUpperCase())))
  }

  return (
    <div>
      <h1>add a new</h1>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
          <br/>
          number: <input value={newNumber} onChange={handleNewNumberChange}/>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default AddNumber
