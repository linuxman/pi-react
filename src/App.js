import React from "react";
import "./water.css"; // css de water
import Leibniz from "./components/Leibniz.js";
import Nilakantha from "./components/Nilakantha.js";

const App = () => {
  return (
    <div>
      <h1>Calculando valores de Pi con React.</h1>
      <hr></hr>
      <Leibniz />
      <hr></hr>
      <Nilakantha />
    </div>
  );
};

export default App;
