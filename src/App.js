import React from 'react';
import Form from './components/Form';
import ItemList from './components/ItemList';
import NavBar from './components/NavBar';
import { useCreateTodo } from './hooks/use-create-todo';

const App = () => {
  const [isSuccess, isPending, error, createTodo] = useCreateTodo();

  return (
    <div>
      <NavBar />
      <ItemList />
      <div style={{ margin: '40px' }} />
      <Form
        isSuccess={isSuccess}
        isPending={isPending}
        errorMessage={error}
        dispatch={createTodo}
      />
    </div>
  );
};

export default App;
