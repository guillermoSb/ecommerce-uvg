import React from "react";
import ItemsRec from "./ItemsRec";
import "../recomendacion.sass";

const ContenedorItemsRec = ({ title, items, removeWishList, limit}) => {
  if(limit) if(limit>=0)items = items.length>parseInt(limit)?items.slice(0, limit):items
  return (
    <div className="contenedorItemsRecDiv">
      <h2 style={{color: 'black'}}>{title}</h2>
      <ul className="contenedorItemsRec">
        {items.map((item, index) => {
          return (
            <div key={index} className="boxRecItems">
              <ItemsRec removeWishList={removeWishList} id_global={item.id_global} id={item.producto?item.producto.itemcode:item.ID?item.ID:null} name={item.producto?item.producto.nombre:item.nombre?item.nombre:null} image={ item.producto?item.producto.imagen:item.imagen?item.imagen:null} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContenedorItemsRec;
