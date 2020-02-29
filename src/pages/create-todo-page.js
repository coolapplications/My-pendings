import React from 'react';
import { useCreateTodo } from '../hooks/use-create-todo';
import Form from '../components/Form';
import NavBar from '../components/NavBar';

export default function CreateTodoPage() {
  const [isSuccess, isPending, error, createTodo] = useCreateTodo();

  return (
    <div>
      <NavBar />
      <div style={{ margin: '40px' }} />
      <Form
        isSuccess={isSuccess}
        isPending={isPending}
        errorMessage={error}
        dispatch={createTodo}
      />
    </div>
  );
}
