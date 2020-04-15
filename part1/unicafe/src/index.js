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

const Statistics = ({good, bad, neutral}) => {
  const calculateAverage = (good, bad, all) => all === 0 ? 0 : (good - bad) / all

  const calculatePositive = (good, all) => all === 0 ? 0 : (good / all) * 100

  const all = good + bad + neutral

  if (all === 0) return <p>No feedback given</p>

  return (
    <>
    <Statistic name="good" variable={good} />
    <Statistic name="neutral" variable={neutral} />
    <Statistic name="bad" variable={bad} />
    <Statistic name="all" variable={all} />
    <Statistic name="average" variable={calculateAverage(good, bad, all)} />
    <Statistic name="positive" variable={calculatePositive(good, all) + "%"} />
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)

  const incrementNeutral = () => setNeutral(neutral + 1)

  const incrementBad = () => setBad(bad + 1)

  return (
    <>
      <Header text="give feedback" />
      <Button onClick={incrementGood} text="good" />
      <Button onClick={incrementNeutral} text="neutral" />
      <Button onClick={incrementBad} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)