import React, { useState } from "react";

const Leibniz = () => {
  const [piValue, setPiValue] = useState(0);
  const [iterations, setIterations] = useState(1000);

  const calculatePi = () => {
    let pi = 0;
    for (let i = 0; i < iterations; i++) {
      pi += (4 * Math.pow(-1, i)) / (2 * i + 1);
    }
    setPiValue(pi);
  };

  return (
    <div>
      <h2>Calculadora de Pi con el método de Leibniz</h2>
      <p>Iteraciones: {iterations}</p>
      <p>Valor actual de Pi: {piValue}</p>
      <button onClick={calculatePi}>Calcular Pi</button>
      <button onClick={() => setIterations(iterations + 1000)}>
        Añadir Iteraciones +1000
      </button>
    </div>
  );
};

export default Leibniz;
