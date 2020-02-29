import React, { useState } from 'react';

function Form(props) {
  const [title, setTitle] = useState(props.todo ? props.todo.title : '');
  const [description, setDescription] = useState(
    props.todo ? props.todo.description : ''
  );
  const [responsible, setResponsible] = useState(
    props.todo ? props.todo.responsible : ''
  );
  const [isComplete, setIsComplete] = useState(
    props.todo ? (props.todo.isComplete ? true : false) : false
  );

  const handleSubmit = event => {
    event.preventDefault();
    if (responsible && description && title) {
      const todo = {
        id: props.todo ? props.todo.id : undefined,
        title,
        description,
        responsible,
        isComplete: isComplete ? 1 : 0
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
      {props.isSuccess && <div>Datos guardados correctamente</div>}
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label forhtml='title'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title'
              placeholder='Your todo title'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <label forhtml='description'>Write your pending</label>
            <textarea
              className='form-control'
              id='description'
              rows='3'
              value={description}
              onChange={event => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <label forhtml='responsible'>Responsible</label>
            <input
              type='text'
              className='form-control'
              id='responsible'
              placeholder='Your name'
              value={responsible}
              onChange={event => setResponsible(event.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='checkbox'
              className='form-check-input'
              id='isCompleted'
              checked={isComplete}
              onChange={event => setIsComplete(event.target.checked)}
            />
            <label className='form-check-label' htmlFor='isCompleted'>
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
