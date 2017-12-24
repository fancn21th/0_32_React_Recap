import React, { Component } from 'react';
import Header from './Header'
import ListView from './ListView'

export default class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }

        this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
    }

    handleTodoSubmit(title) {
        const todo = {
            key: Date.now(),
            title,
        }
        this.setState({
            todos: [
                ...this.state.todos,
                todo
            ]
        })
    }

    render() {
        return (
            <div>
                <Header
                    handleTodoSubmit={this.handleTodoSubmit}
                />
                <ListView
                    todos={this.state.todos}
                />
            </div>
        )
    }
}