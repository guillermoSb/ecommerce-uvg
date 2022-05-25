import React from "react";
import { FaCartPlus, FaTrash } from "../../../../node_modules/react-icons/fa";
import { Link } from "react-router-dom";
const ItemsRec = ({ id, name, image, removeWishList, id_global }) => {
  return (
    <Link id={id} to={`/details-product/${id}`}>
      <img src={image} alt="imagen" height="150px" />
      <div className="itemRecNameAndCart">
        <p>{name}</p>
        <FaCartPlus
          size={20}
          onMouseOver={({ target }) => (target.style.color = "#0066ff")}
          onMouseOut={({ target }) => (target.style.color = "black")}
        />
        <FaTrash
          size={20}
          onMouseOver={({ target }) => (target.style.color = "red")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          onClick={() => {removeWishList(id_global)}}
        />
      </div>
    </Link>
  );
};

export default ItemsRec;
