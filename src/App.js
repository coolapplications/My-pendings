import React, { useState } from 'react';
import Form from './components/Form';
import ItemList from './components/ItemList';
import NavBar from './components/NavBar';

const App = () => {
  const [toDos, setToDos] = useState([]);

  return (
    <div>
      <NavBar />
      <ItemList toDos={toDos} />
      <div style={{ margin: '40px' }} />
      <Form toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
