import React from 'react'

const ListView = (props) => props.todos.map((todo) => (
    <div>{todo.title}</div>
))

export default ListView