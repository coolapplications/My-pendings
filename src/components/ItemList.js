import React, { useEffect } from 'react';
import Item from './Item';
import { useGetTodos } from '../hooks/use-get-todos';

export default function ItemList() {
  const [todos, isPending, error, fetchTodos] = useGetTodos();

  useEffect(fetchTodos, []);

  if (isPending) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Ha ocurrido un error: {error}</div>;
  }

  return todos.map(item => <Item key={item.id} toDo={item} />);
}
