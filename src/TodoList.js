import React, { Component } from 'react'

export default class TodoList extends React.Component {
    // TODO: remove the constructor
    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);

    }
    changeStatus(event){
        const index = event.target.parentNode.getAttribute('id')
        const todoList = this.props.parentRef.state.todoList
        console.log(todoList)
        const status = todoList[index]['status']
        if(status === 'active'){
            todoList[index]['status'] = 'inactive'
        }else{
            todoList[index]['status'] = 'active'
        }
        this.changeState(todoList)
    }
    changeState(todoList){
        this.props.parentRef.setState({todoList:todoList})
        localStorage.setItem('todoList',JSON.stringify(todoList))
    }
    render() {

        return (
           <ul>
               {this.props.parentRef.state.todoList.map((element,index)=>{
               return <li key={index} id={index}>
                        {element.text}
                   <input type="checkbox" checked={element.status === 'active'} onChange={this.changeStatus}></input>
                   </li>
           })}
           </ul>
        );
    }
}
