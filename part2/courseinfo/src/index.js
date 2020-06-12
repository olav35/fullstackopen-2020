import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
