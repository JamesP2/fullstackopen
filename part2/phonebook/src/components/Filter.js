import React from 'react'

const Filter = ({ filter, handleFilter }) => {
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <p>
                Filter by name <input onChange={handleFilter} value={filter} />
            </p>
        </form>
    )
}

export default Filter