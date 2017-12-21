import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class border extends React.Component{
    render() {
        return (
            <div>
                <TypeAdd  />
                <ListTodo />

            </div>
        );
    }
}

class TypeAdd extends React.Component{
    render() {
        return (
            <ul id="todo-list">
                {/* 其中显示数据列表 */}
            </ul>
        );
    }
}

class ListTodo extends React.Component{
    render() {
        return (
            <form>
                <input type="text" placeholder="add todo" autoComplete="off" />
            </form>
        );
    }
}


ReactDOM.render(
    <border />,
    document.getElementById('root')
);
