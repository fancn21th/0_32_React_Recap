import React, { Component } from 'react'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit() {
        this.props.handleTodoSubmit(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Add a todo</button>
            </div>
        )
    }
}

export default Header