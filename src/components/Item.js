import React from 'react';
import { updateToDO, deleteToDo } from '../APIs/ApiGatewayCalls';
import { useDeleteTodo } from '../hooks/use-delete-todo';

function Item(props) {
  const [isSuccess, isPending, error, deleteTodo] = useDeleteTodo(
    props.toDo.id
  );

  function deleteItem() {
    deleteTodo(props.Item.id);
  }
  return (
    <div className='container'>
      <div className='list-group'>
        <a className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>{props.toDo.responsible}</h5>
            <button>{'Pending'}</button>
            <button onClick={deleteItem}>Delete</button>
          </div>
          <textarea className='form-control'>{props.toDo.description}</textarea>
        </a>
      </div>
    </div>
  );
}

export default Item;
