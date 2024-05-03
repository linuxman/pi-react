import React from "react";
import "./water.css"; // css de water
import Montecarlo from "./components/Montecarlo.js";
import Leibniz from "./components/Leibniz.js";
import Nilakantha from "./components/Nilakantha.js";
import MasInfo from "./components/MasInfo.js";

const App = () => {
  return (
    <div>
      <img src="react-pi.png" alt="React Pi Logo"></img>
      <h1>Calculando valores de &pi; con React.</h1>
      <p>
        Aquí hay dos ejemplos de métodos de series infinitas para hacer una
        aproximación al valor de &pi;.
      </p>
      <p>
        La precisión de la aproximación depende del número de términos de la
        serie que se sumen. Generalmente entre más iteraciones mejor, aunque hay
        métodos que se aproximan mejor con un menor número de iteraciones.
      </p>
      <hr></hr>
      <Leibniz />
      <hr></hr>
      <Nilakantha />
      <hr></hr>
      <Montecarlo />
      <MasInfo />
    </div>
  );
};

export default App;
