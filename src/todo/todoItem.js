/**
 * Created by Administrator on 2017-12-21.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const todoItems = []
        const filter = this.props.filter;
        this.props.items.forEach((item, i) => {

            const todoItem =
                <div>
                    {item.title}
                    <input type="checkbox" checked={item.status === 'active' ? true : false} onChange={(event) => {
                            this.props.onChangeItemStatus(item.key, event.target.checked)
                        }
                    }/>
                </div>;
            if(filter === 'all' || filter === item.status) {
                todoItems.push(todoItem)
            }
        })

        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

export {TodoItem};