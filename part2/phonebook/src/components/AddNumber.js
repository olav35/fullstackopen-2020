import React from 'react'

const AddNumber = (props) => {
  const {addNewPerson, onNewNameChange, onNewNumberChange, newName, newNumber} = props

  return (
    <div>
      <h1>add a new</h1>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={onNewNameChange}/>
          <br/>
          number: <input value={newNumber} onChange={onNewNumberChange}/>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default AddNumber
