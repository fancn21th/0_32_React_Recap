/**
 * Created by Administrator on 2017-12-21.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {TodoAdd} from './todoAdd'
import {TodoList} from './todoList'
import {TodoSearch} from './todoSearch'

class TodoTable extends React.Component {

    constructor (props) {
        super(props)

        this.items = [
            {
                key: 1,
                title: 'Tdo Item1',
                status: 'active'
            },
            {
                key: 2,
                title: 'Tdo Item2',
                status: 'complete'
            },
            {
                key: 3,
                title: 'Tdo Item3',
                status: 'active'
            }
        ]
        this.filter = 'all';

        this.maxItemCount = this.items.length;

        this.state = {
            items: this.items,
            filter: this.filter
        }
    }

    addTodoItem(title) {
        this.items.push(
            {
                key: this.maxItemCount + 1,
                title: title,
                status: 'active'
            }
        );
        this.refreshState()
    }

    refreshState(){
        this.setState({
            items: this.items,
            filter: this.filter
        })
    }

    render() {
        const items = this.state.items;
        const filter = this.state.filter;
        return (
            <div style={{border: '1px solid #999', width: '400px'}}>
                <div>
                    <TodoAdd onClickAddTodo={
                        (title) => {
                            this.addTodoItem(title)
                        }
                    }/>
                </div>
                <div>
                    <TodoList items={items} filter={filter} onChangeItemStatus={(key, checked) => {
                        this.items.forEach((item) => {
                            if(item.key === key) {
                                if(checked) {
                                    item.status = 'active'
                                } else {
                                    item.status = 'complete'
                                }
                            }
                        })
                        this.refreshState();
                    }}/>
                </div>
                <div>
                    <TodoSearch onFilter={(filter) => {
                        this.filter = filter;
                        this.refreshState();
                    }}/>
                </div>
            </div>
        );
    }
}

export {TodoTable};