import React, { useState } from "react";

const Nilakantha = () => {
  const [piValue, setPiValue] = useState(3.0);
  const [iterations, setIterations] = useState(10);

  const calculatePi = () => {
    let pi = 3.0;
    let denominadores = 2;
    let sign = -1;

    for (let i = 0; i < iterations; i++) {
      sign = (-1) ** i;
      pi +=
        sign *
        (4 / (denominadores * (denominadores + 1) * (denominadores + 2)));
      denominadores += 2;
    }
    setPiValue(pi);
  };

  return (
    <div>
      <h2>Método de Nilakantha</h2>
      <p>Iteraciones: {iterations}</p>
      <p>
        Valor actual de &pi;: <strong>{piValue}</strong>
      </p>
      <button onClick={calculatePi}>Calcular Pi</button>
      <button onClick={() => setIterations(iterations + 10)}>
        Añadir Iteraciones +10
      </button>
    </div>
  );
};

export default Nilakantha;
