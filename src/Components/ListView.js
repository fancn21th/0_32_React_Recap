import React from 'react'
import ListItem from './ListItem'

const ListView = (props) => Object.keys(props.todos).map(
    (key) => <ListItem key={props.todos[key].id} {...props.todos[key]} handleCheck={props.handleCheck} />
)

export default ListView