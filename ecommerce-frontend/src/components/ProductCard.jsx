/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FaCartPlus, FaStar } from 'react-icons/fa';
import { addCompra } from "../firebase";
//Recomendaciones inicio 
import { api } from '../api';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import Swal from "sweetalert2";
//Recomendaciones final
 
export default function ProductCard(props) {
  const { imgSrc } = props;
  const { titulo } = props;
  const { precio } = props;
  const { descripcion } = props;
  const { id } = props;
  const { cantidad } = props;

  //Recomendaciones inicio 
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  function addWish(imagen, precio, itemcode, nombre, cantidad_disponible) {
    api.post('/api/wishlist/save-as-wish', { "obj": { "usercode": localStorage.getItem('uid'), 'producto': { imagen, precio, itemcode, nombre, cantidad_disponible } } }).then(() => {
      Swal.fire({
        title: 'Agregado a lista de deseos.',
        text: '',
        icon: 'success'
      });
    });
  }

  useEffect(() => {
    if(user) {
      localStorage.setItem('uid', user.uid);
    }
  }, [user])
  //Recomendaciones final

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
        {/* <a href="#ref" className="btn btn-primary btncard" onClick={() => {addCompra(imgSrc,precio,id,titulo,cantidad)}}><FaCartPlus/></a> */}
        {/** Recomendaciones inicio  */}
          <a href="#ref" className="btn btn-primary btncard" id="btn-star" onClick={() => {addWish(imgSrc,precio,id,titulo,cantidad)}}><FaStar/></a>
        {/** Recomendaciones final  */}
      </div>
    </div>
  );
}
