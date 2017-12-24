import React from 'react'
import ListItem from './ListItem'

const ListView = (props) => Object.keys(props.todos)
    .filter((key) => props.filterStatus === 'all' || props.filterStatus === props.todos[key].status)
    .map((key) => <ListItem key={props.todos[key].id} {...props.todos[key]} handleCheck={props.handleCheck} />)

export default ListView