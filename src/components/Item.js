import React from 'react';

function Item(props) {
  return (
    <div className='container'>
      <div className='list-group'>
        <a className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>{props.responsible}</h5>
            <small>{props.text}</small>
          </div>
          <p className='mb-1'>Active</p>
          <small>date</small>
        </a>
      </div>
    </div>
  );
}

export default Item;
