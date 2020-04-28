import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationClass, setNotificationClass] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(people => setPersons(people))
  }, [])

  const createNotification = (className, message) => {
    setNotificationClass(className)
    setNotificationMessage(message)
    setTimeout(() => setNotificationMessage(null), 5000)
  }

  const blankFields = () => {
    setNewName('')
    setNewNumber('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson !== undefined) {

      if (window.confirm(`${newName} is already in the phone book! Press OK to replace the old number with a new one.`))
        personsService.updatePerson(existingPerson.id, { ...existingPerson, number: newNumber })
          .then((updatedPerson) => {
            createNotification('success', `Updated ${newName}`)
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
          })
          .catch(error => {
            createNotification('error', `${newName} has been deleted from the server. Cannot update.`)
          })

      blankFields()
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personsService.createPerson(newPerson)
      .then(returnedPerson => {
        createNotification('success', `Added ${newName}`)
        setPersons(persons.concat(returnedPerson))
        blankFields()
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
      .then(() => {
        createNotification('success', `Deleted ${persons.find(person => person.id === id).name}`)
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification className={notificationClass} message={notificationMessage} />
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