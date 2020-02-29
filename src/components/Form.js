import React from 'react';

function Form(props) {
  const handleSubmit = event => {
    event.preventDefault();
    if (
      event.target.responsible.value &&
      event.target.description.value &&
      event.target.title.value
    ) {
      const todo = {
        title: event.target.title.value,
        description: event.target.description.value,
        responsible: event.target.responsible.value,
        isComplete: event.target.isCompleted.value ? 1 : 0
      };
      console.log('In form is: ', todo);
      props.dispatch(todo);
    }
    event.target.reset();
  };

  return (
    <div>
      {props.isPending && <div>Enviando datos...</div>}
      {props.errorMessage && <div>Error: {props.errorMessage}</div>}
      {props.isSuccess && <div>Datos guardados correctament</div>}
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
          <div className='form-group'>
            <input
              type='checkbox'
              className='form-check-input'
              id='isCompleted'
            />
            <label className='form-check-label' htmlFor='isCompleted'>
              Is completed?
            </label>
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
