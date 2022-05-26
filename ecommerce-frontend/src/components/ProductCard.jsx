/* eslint-disable react/prop-types */
import React from "react";
//import { FaCartPlus, FaStar } from 'react-icons/fa';
import { addCompra } from "../firebase";

export default function ProductCard(props) {
  const { imgSrc } = props;
  const { titulo } = props;
  const { precio } = props;
  const { descripcion } = props;
  const { id } = props;
  const { cantidad } = props;

  function addWish(imagen, precio, itemcode, nombre, cantidad_disponible) {}

  return (
    <div className="card" alt="prueba" key={id} id={id}>
      <img className="card-img-top" src={imgSrc} alt="" />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <h5 className="card-title">{"(" + cantidad + ") $" + precio}</h5>
        <div className="desc">
          <p className="card-text">{descripcion}</p>
        </div>
      </div>
      <div className="divbtn">
        {/*<a href="#ref" className="btn btn-primary btncard" onClick={() => {addCompra(imgSrc,precio,id,titulo,cantidad)}}><FaCartPlus/></a>
          <a href="#ref" className="btn btn-primary btncard" id="btn-star" onClick={() => {addWish(imgSrc,precio,id,titulo,cantidad)}}><FaStar/></a>*/}
      </div>
    </div>
  );
}
