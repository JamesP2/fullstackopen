import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {

  const result = []

  props.partsAndExercises.forEach(element => {
    result.push(<Part part={element[0]} exercises={element[1]} />)
  });

  return result
}

const Total = (props) => {

  var total = 0;

  props.partsAndExercises.forEach(element => {
    total += element[1]
  });

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const partsAndExercises = [
    [part1, exercises1],
    [part2, exercises2],
    [part3, exercises3]
  ]

  return (
    <>
      <Header course={course} />
      <Content partsAndExercises={partsAndExercises} />
      <Total partsAndExercises={partsAndExercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))