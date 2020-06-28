import React from 'react'

const Phonebook = ({setNewName, setPersons, newName, persons}) => {
  const handleNewNameChange = (event) => setNewName(event.target.value)
  const addNewName = (event) => {
    event.preventDefault()
    console.table(persons)
    if(persons.some((person) => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons([...persons].concat({name: newName}))
      setNewName('')
    }
  }
  return (
    <form onSubmit={addNewName}>
      <div>
        name: <input value={newName} onChange={handleNewNameChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Phonebook
