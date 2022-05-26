import React from "react";
import ItemsRec from "./ItemsRec";
import "../recomendacion.sass";

const ContenedorItemsRec = ({ title, items, removeWishList, limit, wish, style }) => {
  if (limit)
    if (limit >= 0)
      items = items.length > parseInt(limit) ? items.slice(0, limit) : items;
  return (
    <div className="contenedorItemsRecDiv" style={style}>
      <h2 style={{ color: "black" }}>{title}</h2>
      {items.length > 0 ? (
        <ul className="contenedorItemsRec">
          {items.map((item, index) => {
            return (
              <div key={index} className="boxRecItems">
                <ItemsRec
                  wish={wish}
                  removeWishList={removeWishList}
                  id_global={item.id_global}
                  id={
                    item.producto
                      ? item.producto.itemcode
                      : item.ID
                      ? item.ID
                      : null
                  }
                  precio={item.producto ? item.producto.precio : item.precio ? item.precio : null}
                  cantidad={item.producto ? item.producto.cantidad : item.cantidad ? item.cantidad : null}
                  name={
                    item.producto
                      ? item.producto.nombre
                      : item.nombre
                      ? item.nombre
                      : null
                  }
                  image={
                    item.producto
                      ? item.producto.imagen
                      : item.imagen
                      ? item.imagen
                      : null
                  }
                />
              </div>
            );
          })}
        </ul>
      ) : (
        <p style={{ margin: "20px" }}>
          Agrega productos a tu lista de deseos:{" "}
          <a href="/Catalogo">catálogo de productos</a>{" "}
        </p>
      )}
    </div>
  );
};

export default ContenedorItemsRec;
