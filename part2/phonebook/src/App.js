import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(people => setPersons(people))
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.filter(person => person.name === newName).length !== 0) {
      alert(`${newName} is already in the phone book!`)
      setNewName('')
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personsService.createPerson(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleDelete = (id) => {
    personsService.deletePerson(id)
      .then(() => setPersons(persons.filter(person => person.id !== id)))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add New</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleSubmit={handleSubmit}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App