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
    result.push(<Part part={element.name} exercises={element.exercises} />)
  });

  return result
}

const Total = (props) => {

  var total = 0;

  props.partsAndExercises.forEach(element => {
    total += element.exercises
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1, part2, part3]

  return (
    <>
      <Header course={course} />
      <Content partsAndExercises={parts} />
      <Total partsAndExercises={parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))