/* eslint-disable react/prop-types */
import React from 'react';
import { FaCartPlus, FaStar } from 'react-icons/fa';
import firebase from "../firebase";

export default function ProductCard(props) {
  const { imgSrc } = props;
  const { titulo } = props;
  const { precio } = props;
  const { descripcion } = props;
  const { id } = props;
  const { cantidad } = props;

  function addCompra(imagen, precio, itemcode, nombre, cantidad_disponible) {
    firebase.firestore().collection('carrito').doc('ZsuFnGu76TWPQus6xGce').set(
        {items: firebase.firestore.FieldValue.arrayUnion( {
                "imagen":imagen, //Str: url de imagen
                "precio":precio, //Int:200
                "itemcode":itemcode, //Str:AVPRfQAkWRx0m7OkmgZv
                "nombre":nombre, //Str: Laptop gaming Dell de 8GB de RAM, i7-7000, NVIDIA GTX,
                "cantidad":cantidad_disponible //Int:3
        })},
        {merge: true}
    );
  }

  function addWish (imagen, precio, itemcode, nombre, cantidad_disponible){

  }

  return (
    <div className="card" alt = "prueba" key={id} id={id} >
        <img className="card-img-top" src={imgSrc} alt=""/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <h5 className="card-title">{"$"+ precio}</h5>
            <div className="desc">
              <p className="card-text">{descripcion}</p>
            </div>
        </div>
        <div className = "divbtn">
          <a href="#ref" className="btn btn-primary btncard" onClick={() => {addCompra("img",precio,id,titulo,cantidad)}}><FaCartPlus/></a>
          <a href="#ref" className="btn btn-primary btncard" id="btn-star" onClick={() => {addWish("img",precio,id,titulo,cantidad)}}><FaStar/></a>
        </div>
    </div>
    
  );
}


