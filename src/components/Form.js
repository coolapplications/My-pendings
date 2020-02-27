import React, { useState } from "react";
import List from "./List";

function Form() {
  const [responsible, setResponsible] = useState("");
  const [pending, setPending] = useState("");
  const [pendingState, setState] = useState(false);
  //const[date, setDate]=useState(newDate);

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.responsible.value && event.target.responsible.value) {
      setResponsible(event.target.responsible.value);
      setPending(event.target.pending.value);
      setState(true);
      
    }
    console.log(responsible, pending, pendingState);
    <List responsible={responsible} pending={pending} pendingState={pendingState}/>
    //clearForm();

    /* fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    }); */
  };


  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="responsible">Responsible</label>
          <input
            type="text"
            class="form-control"
            id="responsible"
            placeholder="Your name"
          />
        </div>
        <div class="form-group">
          <label for="pending">Write your pending</label>
          <textarea class="form-control" id="pending" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Add Pending stuff
        </button>
      </form>
    </div>
  );
}
export default Form;
