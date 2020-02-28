import React, { useState } from "react";

function Item(props) {
  const[check, setChekedItems]=useState(false);
  const[isCompleted, setStateToDo]=useState(props.toDo.isCompleted);
  
  const handleCheck=(event)=>{setChekedItems(event.target.checked);
  setStateToDo(check);}
  
  return (
    <div className="container">
      <div className="list-group">
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.toDo.responsible}</h5>
            <small>{isCompleted ? "Pending" : "Completed"}</small>
            <small>
            <input type="checkbox" className="form-check-input" id="isCompleted" onChange={handleCheck} checked={check}/>
            <label className="form-check-label" htmlFor="isCompleted">
              Is completed?
            </label>
          </small>
          </div>
          <textarea className="form-control">{props.toDo.description}</textarea>
          
        </a>
      </div>
    </div>
  );
}

export default Item;

