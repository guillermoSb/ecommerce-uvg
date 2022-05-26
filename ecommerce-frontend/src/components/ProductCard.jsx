/* eslint-disable react/prop-types */
import React from "react";
import { FaCartPlus, FaInfoCircle } from "react-icons/fa";
import firebase from "../firebase";

export default function ProductCard(props) {
  const { imgSrc } = props;
  const { titulo } = props;
  const { precio } = props;
  const { descripcion } = props;
  const { id } = props;

  function addCompra(imagen, precio, itemcode, nombre, cantidad_disponible) {
    firebase
      .firestore()
      .collection("carrito")
      .doc("ZsuFnGu76TWPQus6xGce")
      .set(
        {
          items: firebase.firestore.FieldValue.arrayUnion({
            imagen: imagen, //Str: url de imagen
            precio: precio, //Int:200
            itemcode: itemcode, //Str:AVPRfQAkWRx0m7OkmgZv
            nombre: nombre, //Str: Laptop gaming Dell de 8GB de RAM, i7-7000, NVIDIA GTX,
            cantidad: cantidad_disponible, //Int:3
          }),
        },
        { merge: true }
      );
  }

  return (
    <div className="card" alt="prueba" id={id}>
      <img className="card-img-top" src={imgSrc} alt="" />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <h5 className="card-title">{"$" + precio}</h5>
        <p className="card-text">{descripcion}</p>
        <a
          href="#ref"
          className="btn btn-primary"
          onClick={addCompra("img", precio, id, titulo, 1)}
        >
          <FaCartPlus />
        </a>
        <a
          href="/details-product/YRdaqO6f73VNRlK6gnzn"
          className="btn btn-primary"
          id="btn-star"
        >
          <FaInfoCircle />
        </a>
      </div>
    </div>
  );
}
