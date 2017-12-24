import React, { Component } from 'react'

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.handleCheck = this.handleCheck.bind(this)
    }


    handleCheck() {
        this.props.handleCheck(this.props.id)
    }

    render() {
        return (
            <div>
                {this.props.title}
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={this.props.status === 'active' && 'checked'}
                        onChange={this.handleCheck}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        )
    }
}

export default ListItem