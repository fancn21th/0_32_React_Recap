import React, { Component } from 'react'

const Header = (props) => (
    <div>
        <input
            type="text"
            ref={
                node => this.input = node
            }
        />
        <button onClick={
            () => {
                props.handleTodoSubmit(this.input.value)
                this.input.value = ''
            }
        }>Add a todo</button>
    </div>
)

export default Header