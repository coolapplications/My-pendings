import { useState } from 'react';

import { updateToDo } from '../APIs/ApiGatewayCalls';

export function useUpdateTodo() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();

  function updateTodo(todo) {
    setIsSuccess(false);
    setIsPending(true);
    setError(null);
    updateToDo(todo)
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

  return [isSuccess, isPending, error, updateTodo];
}
