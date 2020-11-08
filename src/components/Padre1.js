import React from "react";

export const Padre1 = ({ changeState }) => {
  return (
    <div>
      <h1>Soy el padre 1</h1>
      <button onClick={changeState}>Cargar Padre 2</button>
    </div>
  );
};
