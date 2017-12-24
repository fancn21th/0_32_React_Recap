import React from 'react'
import FilterButton from './FilterButton'

const Footer = (props) => (
    <div>
        <FilterButton title="All" {...props} handleFilter={props.handleFilter}/>
        <FilterButton title="Active" {...props} handleFilter={props.handleFilter}/>
        <FilterButton title="Complete" {...props} handleFilter={props.handleFilter}/>
    </div>
)

export default Footer