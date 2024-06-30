import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './Todocontexts/TodoListContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoProvider>
      <App />
  </TodoProvider>
    
);
 

