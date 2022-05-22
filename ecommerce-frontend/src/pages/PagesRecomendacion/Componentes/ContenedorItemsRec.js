import React from "react";
import ItemsRec from "./ItemsRec";
import "../recomendacion.sass";

const ContenedorItemsRec = ({ title, items }) => {
  return (
    <div className="contenedorItemsRecDiv">
      <h2>{title}</h2>
      <ul className="contenedorItemsRec">
        {items.map((item) => {
          return (
            <div className="boxRecItems">
              <ItemsRec id={item.id} name={item.name} image={item.image} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContenedorItemsRec;
