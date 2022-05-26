import React from "react";
import { FaCartPlus, FaTrash } from "../../../../node_modules/react-icons/fa";
import { Link } from "react-router-dom";
const ItemsRec = ({ id, name, image, removeWishList, id_global }) => {
  return (
    <div>
      <img
        src={image}
        alt="imagen"
        height="100%"
        style={{ borderRadius: "15px", maxHeight: "130px", padding: "10px" }}
      />
      <div className="itemRecNameAndCart">
        <a href={`/details-product/${id}`} id={id}>
          <p>{name}</p>
        </a>
        <FaCartPlus
          size={20}
          onMouseOver={({ target }) => (target.style.color = "#0066ff")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          //onClick={agregarItem}
        />
        <FaTrash
          size={20}
          onMouseOver={({ target }) => (target.style.color = "red")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          onClick={() => {
            removeWishList(id_global);
          }}
        />
      </div>
    </div>
  );
};

export default ItemsRec;
