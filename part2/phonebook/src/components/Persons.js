import React from 'react'
import Person from './Person'

const Persons = ({ filter, persons }) => (
        <>
            {
                persons.filter(person => filter === '' || person.name.toLowerCase().includes(filter))
                    .map(person => <Person key={person.name} person={person} />)
            }
        </>
    )

export default Persons