import React from 'react';

import ItemList from '../components/ItemList';
import NavBar from '../components/NavBar';

export default function ListTodosPage() {
  return (
    <div>
      <NavBar />
      <div style={{ margin: '40px' }} />
      <ItemList />
    </div>
  );
}
