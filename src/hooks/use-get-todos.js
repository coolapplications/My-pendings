import { useState } from 'react';
import { getToDos } from '../APIs/ApiGatewayCalls';

export function useGetTodos() {
  const [todos, setTodos] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();

  function fetchTodos() {
    setIsPending(true);
    setError(null);
    getToDos()
      .then(response => {
        setTodos(response.data);
        setIsPending(false);
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
        if (err.response.status === 404) {
          setError('Endpoint no encontrado');
        } else {
          setError(err.response.data.message);
        }

        setIsPending(false);
      });
  }

  return [todos, isPending, error, fetchTodos];
}
