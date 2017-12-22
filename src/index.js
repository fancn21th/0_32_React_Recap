import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoList = this.props.todoList;
    const todos = todoList.map((todo, key) => {
      return (
        <li className="todo-list-li" key={key}>
          <input type="checkbox" checked={todo.status} onChange={() => this.props.handleCheckboxChange(key)}/>
          {todo.name}
        </li>
      );
    });

    return (
      <ul className="todo-list">
        {todos}
      </ul>
    )
  }
}


class TodoBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          name: "123",
          status: false,
        },
        {
          name: "234",
          status: false,
        },
      ],
      todoListFilter: [
        {
          name: "123",
          status: false,
        },
        {
          name: "234",
          status: false,
        },
      ],
      newTodo: ''
    };
    this.handleAddInputChange = this.handleAddInputChange.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }


  handleAddInputChange(event) {
    this.setState({newTodo: event.target.value});
  }

  addNewTodo() {
    const value = this.state.newTodo;
    if (value) {
      const todoList = this.state.todoList.slice();
      todoList.push({
        name: value,
        status: false,
      });
      this.setState({
        todoList: todoList,
        todoListFilter: todoList,
        newTodo: ''
      })
    }
    else {
      return false
    }
  }

  handleCheckboxChange(key) {
    const todoList = this.state.todoList.slice();
    todoList[key].status = !todoList[key].status;
    this.setState({
      todoList: todoList,
      todoListFilter: todoList,
    })
  }

  filterAll() {
    const todoList = this.state.todoList.filter((item) => true);
    this.setState({
      todoListFilter: todoList,
    })
  }

  filterChecked() {
    const todoList = this.state.todoList.filter((item) => item.status === true);
    this.setState({
      todoListFilter: todoList,
    })
  }

  filterUnChecked() {
    const todoList = this.state.todoList.filter((item) => item.status === false);
    this.setState({
      todoListFilter: todoList,
    })
  }


  render() {
    const todoList = this.state.todoListFilter;
    const newTodo = this.state.newTodo;

    return (
      <div className="todo-board">
        <div className="add-a-todo">
          <input type="text" value={newTodo} onChange={this.handleAddInputChange}/>
          <button onClick={() => this.addNewTodo()}>Add a Todo</button>
        </div>
        <Todos todoList={todoList} handleCheckboxChange={(key) => this.handleCheckboxChange(key)}/>
        <div className="filter-btn">
          <button onClick={() => this.filterAll()}>All</button>
          <button onClick={() => this.filterChecked()}>Complete</button>
          <button onClick={() => this.filterUnChecked()}>Active</button>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <TodoBoard/>,
  document.getElementById('root')
);
