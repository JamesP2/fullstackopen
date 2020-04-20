import React from 'react'

const Total = ({ course }) => {
    const sum = course.parts.reduce((accumulatedParts, currentPart) => 
                accumulatedParts + currentPart.exercises, 0)    

    return (
        <p>
            <strong>Total number of exercises: {sum}</strong>
        </p>
    )
}

export default Total