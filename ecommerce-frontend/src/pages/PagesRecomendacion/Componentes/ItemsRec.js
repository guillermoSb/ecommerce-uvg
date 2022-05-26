import React from "react";
import { FaCartPlus, FaTrash, FaStar } from "../../../../node_modules/react-icons/fa";

const ItemsRec = ({ id, name, image, removeWishList, id_global, wish, precio, cantidad }) => {
  return (
    <div>
      <img
        src={image}
        alt="imagen"
        height="100%"
        style={{ borderRadius: "15px", maxHeight: "130px", padding: "10px" }}
      />
      <div className="itemRecNameAndCart">
        <a href={`/details-product/${id}`} id={id}  style={{textDecoration: 'none', color: 'black'}}>
          <p>{name}</p>
        </a>
        <FaCartPlus
          size={20}
          onMouseOver={({ target }) => (target.style.color = "#0066ff")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          //onClick={agregarItem}
        />
        {wish ? <FaTrash
          size={20}
          onMouseOver={({ target }) => (target.style.color = "red")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          onClick={() => {
            removeWishList(id_global);
          }}
        /> : <FaStar 
        size={20}
          onMouseOver={({ target }) => (target.style.color = "yellow")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          onClick={() => {
            removeWishList(image, precio, id, name, cantidad);
          }}
        />}
      </div>
    </div>
  );
};

export default ItemsRec;
