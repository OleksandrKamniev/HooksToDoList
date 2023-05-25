import React, { useState } from 'react';

const TodoElement = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const listItemStyle = {
        display: 'inline-block',
        marginLeft: '10px',
        color: isChecked ? 'grey' : 'black',
        textDecoration: isChecked ? 'line-through': 'none',
    };


    return (
        <div className="todoElement" >
            <form className="form" >
                <input
                    type="checkbox"
                    name="isDone"
                    value="Done"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </form>
            <li className="messageElement" style={listItemStyle}>
                {props.text}
            </li>
            <button className="deleteElement" onClick={props.deleteItem}>
                Delete
            </button>
        </div>
    );
};

export default TodoElement;