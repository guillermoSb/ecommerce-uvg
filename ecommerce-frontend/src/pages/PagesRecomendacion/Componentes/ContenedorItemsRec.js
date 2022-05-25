import React from "react";
import ItemsRec from "./ItemsRec";
import "../recomendacion.sass";

const ContenedorItemsRec = ({ title, items, removeWishList }) => {
  return (
    <div className="contenedorItemsRecDiv">
      <h2>{title}</h2>
      <ul className="contenedorItemsRec">
        {items.map((item, index) => {
          return (
            <div key={index} className="boxRecItems">
              <ItemsRec removeWishList={removeWishList} id_global={item.id_global} id={item.producto.ID || item.ID} name={item.producto.nombre || item.nombre} image={ item.producto.imagen || item.imagen} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContenedorItemsRec;
