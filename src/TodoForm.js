import React, { Component } from 'react'

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.props.parentRef.setState({text:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
        var newTodoList = this.props.parentRef.state.todoList.concat([{text:this.props.parentRef.state.text,status:'active'}])
        this.props.parentRef.setState({text:'',todoList:newTodoList})
        this.refs.todoText.value = ''
        localStorage.setItem('todoList',JSON.stringify(newTodoList))
    }


    render() {


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} ref="todoText"></input>&nbsp;&nbsp;
                    <button type="submit">Add a Todo</button>
                </form>

            </div>
        );
    }
}

