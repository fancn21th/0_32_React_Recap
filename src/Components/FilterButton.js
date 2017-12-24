import React from 'react'

const FilterButton = (props) => (
    <button
        className={props.status.toUpperCase() === props.title.toUpperCase() ? 'activeFilter' : ''}
        onClick={() => props.handleFilter(props.title)}
    >
        {props.title}
    </button>
)

export default FilterButton