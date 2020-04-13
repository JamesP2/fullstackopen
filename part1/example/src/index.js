import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, Your age is {props.age} years.</p>
    </div>
  )
}

const App = () => {
  const name = 'James'
  const age = 10
  return (
    <>
      <h1>Greetrings</h1>
      <Hello name="Will" age={14 + 10}/>
      <Hello name={name} age={age}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))