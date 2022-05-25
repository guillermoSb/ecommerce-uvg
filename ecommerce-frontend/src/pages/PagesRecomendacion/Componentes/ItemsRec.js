import React from "react";
import { FaCartPlus, FaTrash } from "../../../../node_modules/react-icons/fa";

const ItemsRec = ({ id, name, image, borrarItem, agregarItem }) => {
  return (
    <div id={id}>
      <img src={image} alt="imagen" height="150px" />
      <div className="itemRecNameAndCart">
        <p>{name}</p>
        <FaCartPlus
          size={20}
          onMouseOver={({ target }) => (target.style.color = "#0066ff")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          onClick={agregarItem}
        />
        <FaTrash
          size={20}
          onMouseOver={({ target }) => (target.style.color = "red")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          onClick={borrarItem}
        />
      </div>
    </div>
  );
};

export default ItemsRec;
