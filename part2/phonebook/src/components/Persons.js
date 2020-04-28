import React from 'react'
import Person from './Person'

const Persons = ({ filter, persons, handleDelete }) => (
        <>
            {
                persons.filter(person => filter === '' || person.name.toLowerCase().includes(filter))
                    .map(person => <Person key={person.id} person={person} handleDelete={() => handleDelete(person.id)}/>)
            }
        </>
    )

export default Persons