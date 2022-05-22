import React from "react";
import ContenedorItemsRec from "../Componentes/ContenedorItemsRec";

const WishList = ({ objectsfromdb }) => {
  return (
    <div className="wishlistPage">
      <ContenedorItemsRec title="Wish List" items={objectsfromdb} />
    </div>
  );
};

export default WishList;
