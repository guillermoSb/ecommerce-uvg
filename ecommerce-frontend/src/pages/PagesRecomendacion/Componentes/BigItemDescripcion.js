import React from "react";
import { FaCartPlus } from "../../../../node_modules/react-icons/fa";

const BigItemDescripcion = ({
  id,
  name,
  image,
  descripcion1,
  descripcion2,
}) => {
  return (
    <div id={id} className="contenedorItemsRecDiv bigItemRec">
      <img src={image} alt="imagen" width="250px" />
      <div className="itemRecNameAndCart">
        <p>{name}</p>
      </div>
      <ul>
        <li>{descripcion1}</li>
        <li>{descripcion2}</li>
      </ul>
      <FaCartPlus
        size={30}
        className="alignToRightRecCont"
        onMouseOver={({ target }) => (target.style.color = "#0066ff")}
        onMouseOut={({ target }) => (target.style.color = "black")}
      />
    </div>
  );
};

export default BigItemDescripcion;
