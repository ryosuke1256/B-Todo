import { useState } from 'react';
import { Todolist, InputField } from './components';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Apple', 'Grape', 'Strawberry']);

  return (
    <>
      <InputField todosState={{ todos, setTodos }} />
      {todos.map((todo, index) => (
        <Todolist key={index} todosState={{ todos, setTodos }} text={todo} index={index} />
      ))}
    </>
  );
}

export default App;
