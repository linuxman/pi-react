import React from "react";
import "./water.css"; // css de water
import Leibniz from "./components/Leibniz.js";
import Nilakantha from "./components/Nilakantha.js";
import MasInfo from "./components/MasInfo.js";

const App = () => {
  return (
    <div>
      <h1>Calculando valores de &pi; con React.</h1>
      <hr></hr>
      <Leibniz />
      <hr></hr>
      <Nilakantha />
      <MasInfo />
    </div>
  );
};

export default App;
