import { useState } from 'react';
import { postToDo } from '../APIs/ApiGatewayCalls';

export function useCreateTodo() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();

  function createTodo(todo) {
    console.log('Todo in reducer is: ', todo);
    setIsSuccess(false);
    setIsPending(true);
    setError(null);
    postToDo(todo)
      .then(response => {
        setIsSuccess(true);
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

  return [isSuccess, isPending, error, createTodo];
}
