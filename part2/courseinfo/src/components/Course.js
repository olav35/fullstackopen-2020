import React from 'react'

const Header = (props) => (
  <h1>{props.name}</h1>
)

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

const Content = (props) => (
  <div>
    {props.parts.map(part => (<Part key={part.id} part={part}/>))}
  </div>
)

const Total = (props) => <b><p>total of {props.count} exercises</p></b>

const Course = ({course}) =>
  <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total count={course.parts.reduce((sum, part) => sum + part.exercises, 0)}/>
  </div>

export default Course
