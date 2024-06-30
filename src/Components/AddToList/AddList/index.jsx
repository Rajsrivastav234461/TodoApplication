import React, { useState } from 'react';
import { useTodos } from '../../../Todocontexts/TodoListContext';

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo, editTodo } = useTodos();
    const [editableIndex, setEditableIndex] = useState(-1);
    const [editedText, setEditedText] = useState('');

    const handleEdit = (index) => {
        setEditableIndex(index);
        setEditedText(todos[index].text);
    };

    const handleSaveEdit = (index) => {
        editTodo(index, editedText);  
        setEditableIndex(-1);  
        setEditedText('');  
    };

    return (
        <div className='mt-4'>
            {todos.map((todo, index) => (
                <div key={index} className={`flex items-center mb-2 p-2 ${todo.completed ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(index)}
                        className='form-checkbox h-5 w-5 text-blue-600 mx-2'
                    />

                    {editableIndex === index ? (
                        <>
                            <input
                                type="text"
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                                className='flex-1 border-b border-gray-300 px-2 focus:outline-none'
                            />
                            <button
                                className='bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded ml-2'
                                onClick={() => handleSaveEdit(index)}
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <label
                                className={`ml-2 text-lg flex-1 ${
                                    todo.completed ? 'text-gray-400 line-through' : 'text-black'
                                }`}
                            >
                                {todo.text}
                            </label>
                            {todo.completed && todo.completedAt && (
                        <span className='text-sm text-gray-500 bg-yellow-200 rounded-md py-1 px-2 ml-2'>
                            Completed: {new Date(todo.completedAt).toLocaleString()}
                        </span>
                    )}

    <button
    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-full ml-2'
    onClick={() => handleEdit(index)}
>
    Edit
</button>

                        </>
                    )}

                    

                   <button
    className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full ml-1'
    onClick={() => deleteTodo(index)}
>
    Delete
</button>

                </div>
            ))}
        </div>
    );
};

export default TodoList;
