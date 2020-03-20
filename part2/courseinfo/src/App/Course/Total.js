import React from 'react'

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, props.course.parts[0].exercises)
  return <b>total of {total} exercises </b>
}

export default Total