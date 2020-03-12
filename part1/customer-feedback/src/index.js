import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Feedback = (props) => (
  <div>
    <h1>give feedback</h1>
    <button id="good" onClick={props.clickHandler}>good</button>
    <button id="neutral" onClick={props.clickHandler}>neutral</button>
    <button id="bad" onClick={props.clickHandler}>bad</button>
  </div>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = (good / all) * 100 || 0
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
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