import React from 'react';
import './App.css';
import AddTodo from './components/addTodo';

// A stateless pure function
const App = () => (
  <div>
    <h1>Todo List</h1>
    <AddTodo />
  </div>
);

export default App;
