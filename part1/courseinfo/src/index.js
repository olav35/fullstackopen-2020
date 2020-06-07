import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

const Content = (props) => (
  <div>
    {props.parts.map(part => (<Part part={part}/>))}
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.count}</p>
)

const App = () => {
  const course = 'Half stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'The state of a component',
      exercises: 14
    }
    ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total count={parts.reduce((sum, part) => sum + part.exercises, parts[0].exercises)}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
