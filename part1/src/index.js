import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.course.name}</h1>

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Content = (props) => {
  return props.course.parts.map(part => (
    <Part name={part.name} exercises={part.exercises}/>
  )
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, props.course.parts[0].exercises)
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))