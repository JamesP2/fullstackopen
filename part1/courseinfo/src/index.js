import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = ({ course }) => {

  const result = []

  course.parts.forEach(element => {
    result.push(<Part part={element.name} exercises={element.exercises} />)
  });

  return result
}

const Total = ({ course }) => {

  var total = 0;

  course.parts.forEach(element => {
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))