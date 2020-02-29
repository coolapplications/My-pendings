import React from 'react';
import { useDeleteTodo } from '../hooks/use-delete-todo';
import { useHistory } from 'react-router-dom';

function Item(props) {
  const [isSuccess, isPending, deleteTodo] = useDeleteTodo(props.toDo.id);

  const history = useHistory();

  function deleteItem() {
    deleteTodo(props.toDo.id);
  }

  function updateItem() {
    history.push(`/edit/todos/${props.toDo.id}`);
  }

  if (isSuccess) {
    props.removeToDo(props.toDo.id);
  }

  return (
    <div className='container'>
      <div className='list-group'>
        <a className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>
              <strong>Title: {props.toDo.title}</strong>
            </h5>
            <h5>{props.toDo.isComplete ? 'Completed' : 'Pending'}</h5>
            <div>
              <button
                className='btn btn-primary btn-sm m-1'
                onClick={deleteItem}
                disabled={isPending}
              >
                Delete
              </button>
              <button
                className='btn btn-secondary btn-sm m-1'
                onClick={updateItem}
                disabled={isPending}
              >
                Update
              </button>
            </div>
          </div>
          <p>{props.toDo.description}</p>
          <span>Responsible: {props.toDo.responsible}</span>
        </a>
      </div>
    </div>
  );
}

export default Item;
