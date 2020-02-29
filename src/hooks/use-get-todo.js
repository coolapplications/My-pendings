import { useState } from 'react';
import { getToDo } from '../APIs/ApiGatewayCalls';

export function useGetTodo() {
  const [todo, setTodo] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();

  function fetchTodo(id) {
    setIsPending(true);
    setError(null);
    getToDo(id)
      .then(response => {
        setTodo(response.data);
        setIsPending(false);
      })
      .catch(err => {
        if (err.response.status === 404) {
          setError('Endpoint no encontrado');
        } else {
          setError(err.response.data.message);
        }

        setIsPending(false);
      });
  }

  return [todo, isPending, error, fetchTodo];
}
