import React from "react";

const List = (props) => {
  return (
    <div class="container">
      <div class="list-group">
  <a class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{props.responsible}</h5>
      <small>{props.pendingState}</small>
    </div>
    <p class="mb-1">{props.pending}</p>
    <small>date</small>
  </a>
</div>
    </div>
  );
};

export default List;
