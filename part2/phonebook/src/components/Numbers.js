import React from 'react'

const Numbers = ({onDeletePerson, persons}) => (
  <div>
    <h2>Numbers</h2>
    {
      persons.map(person => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={onDeletePerson} value={person.id}>delete</button>
        </div>)
                 )
    }
  </div>
    )

export default Numbers
