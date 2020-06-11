import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick={() => props.setState(props.state + 1)}>{props.name}</button>

const Statistic = (props) => <p>{props.name} {props.number} {props.percent && '%'}</p>

const Statistics = (props) =>
  <div>
    <h1>statistics</h1>
    {
      props.statistics.good + props.statistics.bad + props.statistics.neutral
        ? <>
            <Statistic name='good' number={props.statistics.good}/>
            <Statistic name='neutral' number={props.statistics.neutral}/>
            <Statistic name='bad' number={props.statistics.bad}/>
            <Statistic name='average' number={props.statistics.average}/>
            <Statistic name='positive' number={props.statistics.positive} percent={true}/>
          </>
        : <p>No feeback given</p>
    }
  </div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = (good + bad + neutral)
  const average = (good - bad) / total
  const positive = (good) / total * 100

  return (
      <div>
      <h1>Give feedback</h1>
      <Button setState={setGood} state={good} name='good'/>
      <Button setState={setNeutral} state={neutral} name='neutral'/>
      <Button setState={setBad} state={bad} name='bad'/>
      <Statistics statistics={{good, neutral, bad, average, positive}}/>
      </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
