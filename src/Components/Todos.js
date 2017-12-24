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
        this.showAll = this.showAll.bind(this)
        this.showActive = this.showActive.bind(this)
        this.showComplete = this.showComplete.bind(this)
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

    showAll() {
        this.setState({
            filterStatus: 'all'
        })
    }

    showActive() {
        this.setState({
            filterStatus: 'active'
        })
    }

    showComplete() {
        this.setState({
            filterStatus: 'complete'
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
                        todos={this.state.todos}
                        handleCheck={this.handleCheck}
                    />
                </div>
                <Footer
                    showAll={this.showAll}
                    showActive={this.showActive}
                    showComplete={this.showComplete}
                    status={this.state.filterStatus}
                />
            </div>
        )
    }
}