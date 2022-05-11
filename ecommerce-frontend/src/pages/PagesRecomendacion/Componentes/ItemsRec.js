import React from "react";
import { BsCartPlus } from "../../../../node_modules/react-icons/bs";

const ItemsRec = ({ id, name, image }) => {
  return (
    <div id={id}>
      <img src={image} alt="imagen" height="150px" />
      <div className="itemRecNameAndCart">
        <p>{name}</p>
        <BsCartPlus />
      </div>
    </div>
  );
};

export default ItemsRec;
