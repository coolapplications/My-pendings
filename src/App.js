import React, { useReducer } from 'react';
import Form from './components/Form';
import ItemList from './components/ItemList';
import NavBar from './components/NavBar';
import produce from 'immer';

const App = () => {
  const [toDos, dispatch] = useReducer(
    produce((draft, action) => {
      switch (action.type) {
        case 'addToDo':
          draft.push(action.payload);
          break;
        default:
      }
    }),
    []
  );

  return (
    <div>
      <NavBar />
      <ItemList toDos={toDos} />
      <div style={{ margin: '40px' }} />
      <Form toDos={toDos} dispatch={dispatch} />
    </div>
  );
};

export default App;
