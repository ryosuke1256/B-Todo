import React from 'react';

export const Todolist = ({ todosState, text, index }) => {
  const { todos, setTodos } = todosState;

  const deleteTodo = (todos) => {
    //
  };

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => deleteTodo(todos)}>X</button>
      <div>{text}</div>
    </div>
  );
};
