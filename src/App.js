import React from "react";
import Form from "./components/Form";
import Lists from "./components/Lists";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Lists />
      <div style={{margin: "40px"}} />
      <Form />
    </div>
  );
};

export default App;
