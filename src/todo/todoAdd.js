/**
 * Created by Administrator on 2017-12-21.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class TodoAdd extends React.Component {

    constructor (props) {
        super(props)
        this.toDoTitle = ''
    }

    render() {
        return (
            <div style={{border: '1px solid #999'}}>
                <div>
                    <span>
                        <input type="text" name="inputTodo" onChange={(event) => {
                            this.toDoTitle = event.target.value;
                        }}/>
                    </span>
                    <span>
                        <button onClick={() => {
                            this.toDoTitle && this.props.onClickAddTodo(this.toDoTitle)
                        }}>Add a Todo</button>
                    </span>
                </div>
            </div>
        );
    }
}

export {TodoAdd};