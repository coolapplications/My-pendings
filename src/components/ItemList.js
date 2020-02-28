import React from 'react';
import Item from './Item';

export default function ItemList(props) {
  return props.toDos.map((item, index) => <Item key={index} toDo={item} />);
}
