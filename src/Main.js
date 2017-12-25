import React, { Component } from 'react'

import _ from 'lodash'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Main extends React.Component {

    constructor(props){
        super(props);
        const todoList = localStorage.getItem('todoList')? window.JSON.parse(localStorage.getItem('todoList')):[]
        this.state = {todoList: todoList, text: ''}
        this.changeShowModel = this.changeShowModel.bind(this)
    }
    changeShowModel(event){
        const model = event.target.value
        const todoList = localStorage.getItem('todoList')? window.JSON.parse(localStorage.getItem('todoList')):[]
        console.log(todoList)
        let resultList = []
        if(model === 'all'){
            resultList = todoList
        }else{
            resultList = todoList.filter((x)=>{
               if(x.status === model)  return x
            })
        }
        console.log(resultList)
        this.setState({todoList:resultList})
    }
    render() {
        return (
            <div className="main">
                <div className="game-board">
                    <TodoForm todoList={this.state.todoList} parentRef={this} />
                </div>
                <div className="game-board">
                    <TodoList todoList={this.state.todoList} parentRef={this} />
                </div>
                <div>
                    <button onClick={this.changeShowModel} value='all'>All</button>&nbsp;&nbsp;
                    <button onClick={this.changeShowModel} value='inactive'>Inactive</button>&nbsp;&nbsp;
                    <button onClick={this.changeShowModel} value='active'>Active</button>&nbsp;&nbsp;
                </div>
            </div>
        );
    }
}