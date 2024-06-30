import React, { createContext, useContext, useEffect, useState } from "react";

const TodoListContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        if (todoList.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todoList));
        }
    }, [todoList]);

    const addTodoItem = (text) => {
        const newTodo = { text, completed: false };
        setTodoList([...todoList, newTodo]);
    };

    const toggleTodoItem = (index) => {
        const updatedTodos = todoList.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    completed: !todo.completed,
                    completedAt: !todo.completed ? new Date().toISOString() : null
                };
            }
            return todo;
        });
        setTodoList(updatedTodos);
    };

    const deleteTodoItem = (index) => {
        const filteredTodos = todoList.filter((todo, i) => i !== index);
        setTodoList(filteredTodos);
    };

    const editTodoItem = (index, newText) => {
        const modifiedTodos = [...todoList];
        modifiedTodos[index] = {
            ...modifiedTodos[index],
            text: newText
        };
        setTodoList(modifiedTodos);
    };

    return (
        <TodoListContext.Provider
            value={{ todos: todoList, addTodo: addTodoItem, toggleTodo: toggleTodoItem, deleteTodo: deleteTodoItem, editTodo: editTodoItem }}
        >
            {children}
        </TodoListContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoListContext);
    return context;
};

export default TodoListContext;
