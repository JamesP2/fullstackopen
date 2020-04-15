import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => (
  <div>
    <p>Hello {name}, Your age is {age} years.</p>
  </div>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const name = 'James'
  const [ age, setAge] = useState(10)

  const incrementAge = () => setAge(age + 1)
  const setDefault = () => setAge(10)

  return (
    <>
      <h1>Greetrings</h1>
      <Hello name="Will" age={14 + 10}/>
      <Hello name={name} age={age}/>
      <Button handleClick={incrementAge} text="plus" />
      <Button handleClick={setDefault} text="default"/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))