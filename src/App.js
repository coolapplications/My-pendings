import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import CreateTodoPage from './pages/create-todo-page';
import ListTodosPage from './pages/list-todos-page';
import UpdateTodosPage from './pages/update-todo-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/todos'>
          <ListTodosPage />
        </Route>
        <Route path='/create'>
          <CreateTodoPage />
        </Route>
        <Route path='/edit/todos/:todoId'>
          <UpdateTodosPage />
        </Route>
        <Redirect from='/' to='/todos' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
