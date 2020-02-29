import React, { useState } from 'react';
import { updateToDO } from '../APIs/ApiGatewayCalls';

function Item(props) {
  const [isCompleted, setStateToDo] = useState(props.toDo.isCompleted);

  return (
    <div className='container'>
      <div className='list-group'>
        <a className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>{props.toDo.responsible}</h5>
            <button>{isCompleted ? 'Completed' : 'Pending'}</button>
            <button>Delete</button>
          </div>
          <textarea className='form-control'>{props.toDo.description}</textarea>
        </a>
      </div>
    </div>
  );
}

export default Item;
