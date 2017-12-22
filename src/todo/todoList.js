/**
 * Created by Administrator on 2017-12-21.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {TodoItem} from './todoItem'

class TodoList extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div style={{border: '1px solid #999'}}>
                <div>
                    <TodoItem items={this.props.items} filter={this.props.filter} onChangeItemStatus={this.props.onChangeItemStatus}/>
                </div>
            </div>
        );
    }
}

export {TodoList};