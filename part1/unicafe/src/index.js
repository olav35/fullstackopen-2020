import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.statistics.good}</p>
      <p>neutral {props.statistics.neutral}</p>
      <p>bad {props.statistics.bad}</p>
      <p>average {props.statistics.average}</p>
      <p>positive {props.statistics.positive} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = (good + bad + neutral)
  const average = (good - bad) / total || 0
  const positive = (good) / total * 100 || 0

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics statistics={{good, neutral, bad, average, positive}}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
