import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => 
  <button id={props.id} onClick={props.onClick}>{props.id}</button>

const Feedback = (props) => (
  <div>
    <h1>give feedback</h1>
    <Button id="good" onClick={props.clickHandler}/>
    <Button id="neutral" onClick={props.clickHandler}/>
    <Button id="bad" onClick={props.clickHandler}/>
  </div>
)

const Statistic = ({text, score, percentage}) =>
  <tr>
    <th>{text}</th><td>{score}{percentage && '%'}</td>
  </tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = (good / all) * 100 || 0
  if ([good, neutral, bad].every(score => score === 0)){
    return <p>No feedback given</p>
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" score={good}/>
            <Statistic text="neutral" score={neutral}/>
            <Statistic text="bad" score={bad}/>
            <Statistic text="all" score={all}/>
            <Statistic text="average" score={average}/>
            <Statistic text="positive" score={positive} percentage={true}/>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickHandler = (event) => {
    const id = event.target.id
    id === "good" && setGood(good => good + 1)
    id === "neutral" && setNeutral(neutral => neutral + 1)
    id === "bad" && setBad(bad => bad + 1)
  }

  return (
    <div>
      <Feedback clickHandler={clickHandler}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)