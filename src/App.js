import React, { useState } from 'react';
import TodoForm from './TodoForm';

import ToDoElement from "./ToDoElement";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const deleteItem = (id) => {
        const index = todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
        }
    };

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <ToDoElement
                        key={todo.id}
                        text={todo.text}
                        deleteItem={() => deleteItem(todo.id)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;