import React, { Component } from 'react';
import Header from './Header'
import ListView from './ListView'
import Footer from './Footer'

export default class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: {},
            filterStatus: 'all',
        }

        this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.filter = this.filter.bind(this)
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

    filter(status) {
        console.log(status)
        this.setState({
            filterStatus: status.toLowerCase()
        })
    }

    render() {
        return (
            <div>
                <Header
                    handleTodoSubmit={this.handleTodoSubmit}
                />
                <div className="todoListContainer">
                    <ListView
                        filterStatus={this.state.filterStatus}
                        todos={this.state.todos}
                        handleCheck={this.handleCheck}
                    />
                </div>
                <Footer
                    handleFilter={this.filter}
                    status={this.state.filterStatus}
                />
            </div>
        )
    }
}