import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({ course }) => (
    <div>
        <Header text={course.name} />
        <Content course={course} />
        <Total course={course} />
    </div>
)

export default Course