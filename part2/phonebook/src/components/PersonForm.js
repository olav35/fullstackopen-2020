import React from "react"

const PersonForm = ({handleSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>name: </label>
      <input value={newName} onChange={handleNameChange}/>
      <br></br>
      <label>number: </label>
      <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm