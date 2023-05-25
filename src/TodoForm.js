import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="submitForm"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add new todo"
            />
            <button type="submit" className="submitButton">+Add</button>
        </form>
    );
}

export default TodoForm;