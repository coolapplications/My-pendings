import React, { useEffect } from 'react';
import Item from './Item';
import { useGetTodos } from '../hooks/use-get-todos';

export default function ItemList() {
  const [todos, isPending, error, fetchTodos] = useGetTodos();

  useEffect(fetchTodos, []);

  function refreshToDos() {
    fetchTodos();
  }

  return (
    <div className='container' style={{ textAlign: 'center' }}>
      <button
        type='submit'
        onClick={refreshToDos}
        disabled={isPending}
        className='btn btn-primary ml-2'
      >
        Update To do's
      </button>
      {isPending && <div>Loading Todos From Api....</div>}
      {error && <div>Ha ocurrido un error: {error}</div>}
      {todos.map(item => (
        <Item key={item.id} toDo={item} />
      ))}
    </div>
  );
}
