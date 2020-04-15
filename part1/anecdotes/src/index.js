import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({anecdote, votes}) => (
  <>
  <p>{anecdote}</p>
  <p>This anecdote has {votes} votes.</p> 
  </>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const initialVotes = new Uint8Array(props.anecdotes.length)
  const [votes, setVotes] = useState(initialVotes)  

  const selectRandom = () => setSelected(parseInt(Math.random() * props.anecdotes.length))

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected]++;
    setVotes(newVotes)
  }

  const mostPopularIndex = () => {
    let highestIndex = 0
    let mostVotes = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > mostVotes) {
        mostVotes = votes[i]
        highestIndex = i
      }
    }

    return highestIndex
  }

  return (
    <>
      <Header text="Anecdote of the day" />
      <Button handleClick={selectRandom} text="next anecdote" />
      <Button handleClick={vote} text="vote!" />
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <Header text="Anecdote with the most votes" />
      <Anecdote anecdote={props.anecdotes[mostPopularIndex()]} votes={votes[mostPopularIndex()]} />
    </>
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