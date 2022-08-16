import { useState } from 'react';

export const InputField = ({ todosState }) => {
  const { todos, setTodos } = todosState;
  const [submitText, setSubmitText] = useState('');

  const addTodos = () => {
    setTodos([...todos, submitText]);
    setSubmitText('');
  };

  return (
    <>
      <input type='text' value={submitText} onChange={(e) => setSubmitText(e.target.value)} />
      <button onClick={() => addTodos()}>追加</button>
    </>
  );
};
