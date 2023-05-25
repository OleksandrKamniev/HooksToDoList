import React, {useState} from 'react';
import TodoForm from './TodoForm';
import ToDoElement from './ToDoElement';
import ClearAllButton from "./ClearAll";
import SearchBox from "./SearchBox";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [searchText, setSearchText] = useState('');
    const clearAll = () => {
        setTodos([]);
    };
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
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="main">
            <div className="header">
                <h1>Todo List</h1>
            </div>
            <div className="searchbox">
            <SearchBox  handleSearchChange={handleSearchChange} searchText={searchText}/>
            </div>
                <div className="todo-list">
                <ul>
                    {filteredTodos.map((todo) => (
                        <ToDoElement
                            key={todo.id}
                            text={todo.text}
                            deleteItem={() => deleteItem(todo.id)}
                        />
                    ))}
                </ul>
            </div>
            <div className="clearall">
                {todos.length !== 0 && <ClearAllButton clearAll={clearAll}/>}
            </div>
            <div className="addTodo">
            <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

export default TodoList;