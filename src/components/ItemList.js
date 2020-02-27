import React from "react";
import List from "./Item";

export const Lists = props => {
  console.log(props.responsible, props.pending);

  return props.map(() => (
    <List responsible={props.responsible} pending={props.pending} />
  ));
};
