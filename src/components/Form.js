import React from 'react';
import { postToDo, getToDos } from '../APIs/ApiGatewayCalls';

function Form(props) {
  const handleSubmit = event => {
    event.preventDefault();
    if (
      event.target.responsible.value &&
      event.target.description.value &&
      event.target.title.value
    ) {
      props.dispatch({
        type: 'addToDo',
        payload: {
          responsible: event.target.responsible.value,
          description: event.target.description.value,
          isCompleted: true,
          title: event.target.title.value
        }
      });
    }
    getToDos();
    event.target.reset();
  };

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label forhtml='title'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title'
              placeholder='Your todo title'
            />
          </div>

          <div className='form-group'>
            <label forhtml='description'>Write your pending</label>
            <textarea
              className='form-control'
              id='description'
              rows='3'
            ></textarea>
          </div>
          <div className='form-group'>
            <label forhtml='responsible'>Responsible</label>
            <input
              type='text'
              className='form-control'
              id='responsible'
              placeholder='Your name'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Add Pending stuff
          </button>
        </form>
        <button type='button' className='btn btn-primary mt-1'>
          Update to do's
        </button>
      </div>
    </div>
  );
}
export default Form;
