import React from 'react'

const ListItem = (props) => (
    <div>
        {props.title}
        <label className="switch">
            <input
                type="checkbox"
                checked={props.status === 'active' && 'checked'}
                onChange={() => {props.handleCheck(props.id)}}
            />
            <span className="slider round"></span>
        </label>
    </div>
)

export default ListItem