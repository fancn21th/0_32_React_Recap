import React from 'react'
import FilterButton from './FilterButton'

const Footer = (props) => (
    <div>
        <FilterButton title="All" {...props} handleClick={props.filter}/>
        <FilterButton title="Active" {...props} handleClick={props.filter}/>
        <FilterButton title="Complete" {...props} handleClick={props.filter}/>
    </div>
)

export default Footer