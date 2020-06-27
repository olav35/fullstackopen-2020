import React from 'react'

const Numbers = ({persons}) => (
  <div>
    <h2>Numbers</h2>
    {persons.map(person => <p key={person.name}>{person.name}</p>)}
  </div>
)

export default Numbers
