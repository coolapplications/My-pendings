import React from "react";
import List from "../components/List";


export const Lists = (props) => { 
    
    return props.map((props) =>
      <List responsible={props.responsible} pending={props.pending} pendingState={props.pendingState} />)
  }