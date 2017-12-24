import React from 'react'

const Footer = (props) => (
    <div>
        <button className={props.status ==='all' ? 'activeFilter' : ''} onClick={props.showAll}>All</button>
        <button className={props.status ==='active' ? 'activeFilter' : ''} onClick={props.showActive}>Active</button>
        <button className={props.status ==='complete' ? 'activeFilter' : ''} onClick={props.showComplete}>Complete</button>
    </div>
)

export default Footer