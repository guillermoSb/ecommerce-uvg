import React from "react";

const SpectsRec = ({ id, spec1, spec2, spec3, spec4, spec5 }) => {
  return (
    <div id={id}>
      <h3>Especificaciones:</h3>
      <ul>
        <li>{spec1}</li>
        <li>{spec2}</li>
        <li>{spec3}</li>
        <li>{spec4}</li>
        <li>{spec5}</li>
      </ul>
    </div>
  );
};

export default SpectsRec;
