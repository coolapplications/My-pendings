import React from "react";
import Form, { setResponsible, setPending } from "./components/Form";
import Lists from "./components/ItemList";
import NavBar from "./components/NavBar";

const App = () => {
  const [responsible] = setResponsible("");
  const [pending] = setPending("");
  const data = [responsible, pending];
  return (
    <div>
      <NavBar />
      <Lists responsible={data.responsible} pending={data.pending} />
      <div style={{ margin: "40px" }} />
      <Form />
    </div>
  );
};

export default App;
