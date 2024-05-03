import React, { useState } from "react";

const MontecarloPi = () => {
  const [pointsInsideCircle, setPointsInsideCircle] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [pi, setPi] = useState(0);

  const calculatePi = () => {
    const totalPoints = 1000000; // Número total de puntos a generar
    let pointsInsideCircle = 0;

    for (let i = 0; i < totalPoints; i++) {
      const x = Math.random();
      const y = Math.random();
      const distance = Math.sqrt(x * x + y * y);

      if (distance <= 1) {
        pointsInsideCircle++;
      }
    }

    const piApproximation = (4 * pointsInsideCircle) / totalPoints;
    setPi(piApproximation);

    setPointsInsideCircle(pointsInsideCircle);
    setTotalPoints(totalPoints);

    // console.log("Aproximación de Pi:", piApproximation);
  };

  return (
    <div>
      <h2>Método de Montecarlo</h2>
      <p>
        El método de Montecarlo para calcular Pi consiste en generar puntos
        aleatorios dentro de un cuadrado y contar cuántos de esos puntos caen
        dentro de un círculo inscrito en el cuadrado.
      </p>
      <p>
        Cada vez que presiones el botón dará un resultado diferente, pero
        aproximado a &pi;.
      </p>
      <button onClick={calculatePi}>Calcular Pi</button>
      <p>Puntos dentro del círculo: {pointsInsideCircle}</p>
      <p>Total de puntos generados: {totalPoints}</p>
      <p>
        La aproximación de &pi; es: <strong>{pi}</strong>
      </p>
    </div>
  );
};

export default MontecarloPi;
