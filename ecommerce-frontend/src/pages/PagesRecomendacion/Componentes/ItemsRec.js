import React from "react";
import { FaCartPlus, FaTrash } from "../../../../node_modules/react-icons/fa";
import { Link } from "react-router-dom";
const ItemsRec = ({ id, name, image, removeWishList, id_global }) => {
  return (
    <div>
      <img src={image} alt="imagen" height="150px" />
      <div className="itemRecNameAndCart">
        <Link id={id} to={`/details-product/${id}`}>
          <p>{name}</p>
        </Link>
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
