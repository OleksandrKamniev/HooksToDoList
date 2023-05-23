import React, { useState } from 'react';

const TodoElement = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const listItemStyle = {
        display: 'inline-block',
        marginLeft: '10px',
        color: isChecked ? 'green' : 'black',
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px'}}>
            <form>
                <input
                    type="checkbox"
                    name="isDone"
                    value="Done"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </form>
            <li style={listItemStyle}>
                {props.text}
            </li>
            <button onClick={props.deleteItem}>
                Delete
            </button>
        </div>
    );
};

export default TodoElement;