import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const NextButton = (props) => <button onClick={() => props.setSelected(Math.floor(Math.random() * props.anecdotes.length))}>Next anecdote</button>

const VoteButton = (props) => <button onClick={() => {
  let votes = [...props.votes]
  votes[props.selected]++
  props.setVotes(votes)
}
}>Vote</button>

const Votes = ({votes}) => <p>has {votes} votes</p>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <Votes votes={votes[selected]}/>
      <VoteButton setVotes={setVotes} votes={votes} selected={selected}/>
      <NextButton setSelected={setSelected} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
