import React from 'react';

function Form(props) {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.responsible.value);
    if (event.target.responsible.value && event.target.text.value) {
      props.setToDos([
        ...props.toDos,
        {
          responsible: event.target.responsible.value,
          text: event.target.text.value,
          isPending: true
        }
      ]);
    }

    event.target.reset();
  };

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
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
            <label forhtml='text'>Write your pending</label>
            <textarea className='form-control' id='text' rows='3'></textarea>
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
