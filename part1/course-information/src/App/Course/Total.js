import React from 'react'

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, props.course.parts[0].exercises)
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

export default Total