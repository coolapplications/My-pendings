import React from 'react';

function Form(props) {
  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.responsible.value && event.target.text.value) {
      props.dispatch({
        type: 'addToDo',
        payload: {
          responsible: event.target.responsible.value,
          text: event.target.text.value,
          isPending: true,
          date: new Date().toString()
        }
      });
    }

    event.target.reset();
  };

  return (
    <div>
      <div className='container'>
        <div className='form-group'>
          <label forhtml='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Your todo title'
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label forhtml='text'>Write your pending</label>
            <textarea className='form-control' id='text' rows='3'></textarea>
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
          <div className='form-group'>
            <label forhtml='responsible'>Responsible</label>
            <input
              type='text'
              className='form-control'
              id='responsible'
              placeholder='Your name'
            />
          </div>
          <div class='form-check'>
            <input type='checkbox' class='form-check-input' id='isCompleted' />
            <label class='form-check-label' for='isCompleted'>
              Is completed?
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Add Pending stuff
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
