import React from "react"

const PersonForm = ({submitHandler, newName, nameChangeHandler, newNumber, numberChangeHandler}) => (
  <form onSubmit={submitHandler}>
    <div>
      <label>name: </label>
      <input value={newName} onChange={nameChangeHandler}/>
      <br></br>
      <label>number: </label>
      <input value={newNumber} onChange={numberChangeHandler}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm