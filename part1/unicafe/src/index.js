import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistic = ({name, variable}) => (
  <p>{name} {variable}</p>
)


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    calculateAverage()
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    calculateAverage()
  }

  const incrementBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    calculateAverage()
  }

  const calculateAverage = () => setAverage((good - bad) / all)

  return (
    <>
      <Header text="give feedback" />
      <Button onClick={incrementGood} text="good" />
      <Button onClick={incrementNeutral} text="neutral" />
      <Button onClick={incrementBad} text="bad" />
      <Header text="statistics" />
      <Statistic name="good" variable={good} />
      <Statistic name="neutral" variable={neutral} />
      <Statistic name="bad" variable={bad} />
      <Statistic name="all" variable={all} />
      <Statistic name="average" variable={average} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)