import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../components/NavBar';
import { useGetTodo } from '../hooks/use-get-todo';
import { useUpdateTodo } from '../hooks/use-update-todo';
import Form from '../components/Form';

export default function UpdateTodosPage() {
  const { todoId } = useParams();
  const [todo, isGetTodoPending, getTodoError, getTodo] = useGetTodo();
  const [isSuccess, isPending, error, updateTodo] = useUpdateTodo();

  useEffect(() => {
    getTodo(todoId);
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{ margin: '40px' }} />
      {isGetTodoPending && <div>Cargando datos del todo</div>}
      {getTodoError && <div>Error obteniendo el To Do: {getTodoError}</div>}
      {todo && (
        <Form
          todo={todo}
          isSuccess={isSuccess}
          isPending={isPending}
          errorMessage={error}
          dispatch={updateTodo}
        />
      )}
    </div>
  );
}
