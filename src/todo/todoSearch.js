/**
 * Created by Administrator on 2017-12-21.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class TodoSearch extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div style={{border: '1px solid #999'}}>
                <div>
                    <span>
                        <button onClick={(event) => {
                            this.props.onFilter('all');
                        }}>All</button>
                    </span>
                    <span>
                        <button onClick={(event) => {
                            this.props.onFilter('complete');
                        }}>Complete</button>
                    </span>
                    <span>
                        <button onClick={(event) => {
                            this.props.onFilter('active');
                        }}>Active</button>
                    </span>
                </div>
            </div>
        );
    }
}

export {TodoSearch};