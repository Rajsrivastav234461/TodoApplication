import React, { useState } from "react";
import { useTodos } from "../../Todocontexts/TodoListContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2 justify-between"
    >
      <input
        type="text"
        value={text}
        placeholder="Add new Task"
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="form-input w-full rounded-md border shadow-sm p-4 mb-2 md:mb-0 md:w-3/4 bg-gray-100 hover:bg-blue-200 focus:bg-blue-100"
      />
      <button className="bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full md:w-32">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
