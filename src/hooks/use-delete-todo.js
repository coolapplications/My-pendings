import { useState } from 'react';
import { deleteToDo } from '../APIs/ApiGatewayCalls';

export function useDeleteTodo() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState();

  function deleteTodo(todo) {
    setIsSuccess(false);
    setIsPending(true);
    setError(null);
    deleteToDo(todo)
      .then(response => {
        setIsSuccess(true);
        setIsPending(false);
      })
      .catch(err => {
        if (err.response.status === 404) {
          setError('No se ha eliminado');
        } else {
          setError(err.response.data.message);
        }

        setIsPending(false);
      });
  }

  return [isSuccess, isPending, error, deleteTodo];
}
