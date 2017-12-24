import React, { Component } from 'react';
import Header from './Header'
import ListView from './ListView'

export default class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: {}
        }

        this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleTodoSubmit(title) {
        const todo = {
            id: Date.now(),
            title,
            status: 'active'
        }
        this.setState({
            todos: {
                ...this.state.todos,
                [todo.id]: todo,
            }
        })
    }

    handleCheck(id) {
        const toogleTodo = {
            ...this.state.todos[id],
            status: this.state.todos[id].status === 'active' ? 'complete' : 'active'
        }
        this.setState({
            todos: {
                ...this.state.todos,
                [id]: toogleTodo,
            }
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
                    handleCheck={this.handleCheck}
                />
            </div>
        )
    }
}