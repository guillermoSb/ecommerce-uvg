/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Catalogo.scss'
import { FaCartPlus, FaStar } from "react-icons/fa";

import prod1 from "../imgs/phone_1.jpg"


export default function Catalogo() {
  const [products, setProducts] = useState([
    { id:0 , nombre: 'phone1', precio: 7000, descripcion: 'Phone 1', img: prod1, categoria:'tecnologia'},
    { id:1 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
  ]);
  return (
    <>
    <div className="catalogo-page">
      <div className="spacer_top"></div>
        <div id="features">
          <div class="card card-wide">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <h5 class="card-title">Peraphone S2</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary"><FaCartPlus/></a>
            </div>
          </div>
        </div>
        
        <div className="catalogo">
          <div className="card" alt = "prueba">
            <img className="card-img-top" src={products[0].img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{products[0].nombre}</h5>
              <h5 className="card-title">{"$"+ products[0].precio}</h5>
              <p className="card-text">{products[0].descripcion}</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
              <a href="#" className="btn btn-primary" id="btn-star"><FaStar/></a>
            </div>
          </div>
          <div className="card" alt = "prueba">
            <img className="card-img-top" src={products[0].img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{products[0].nombre}</h5>
              <h5 className="card-title">{"$"+ products[0].precio}</h5>
              <p className="card-text">{products[0].descripcion}</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
              <a href="#" className="btn btn-primary" id="btn-star"><FaStar/></a>
            </div>
          </div>
          <div className="card" alt = "prueba">
            <img className="card-img-top" src={products[0].img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{products[0].nombre}</h5>
              <h5 className="card-title">{"$"+ products[0].precio}</h5>
              <p className="card-text">{products[0].descripcion}</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
              <a href="#" className="btn btn-primary" id="btn-star"><FaStar/></a>
            </div>
          </div>
          <div className="card" alt = "prueba">
            <img className="card-img-top" src={products[0].img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{products[0].nombre}</h5>
              <h5 className="card-title">{"$"+ products[0].precio}</h5>
              <p className="card-text">{products[0].descripcion}</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
              <a href="#" className="btn btn-primary" id="btn-star"><FaStar/></a>
            </div>
          </div>
          <div className="card" alt = "prueba">
            <img className="card-img-top" src={products[0].img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{products[0].nombre}</h5>
              <h5 className="card-title">{"$"+ products[0].precio}</h5>
              <p className="card-text">{products[0].descripcion}</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
              <a href="#" className="btn btn-primary" id="btn-star"><FaStar/></a>
            </div>
          </div>
          <div className="card" alt = "prueba">
            <img className="card-img-top" src={products[0].img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{products[0].nombre}</h5>
              <h5 className="card-title">{"$"+ products[0].precio}</h5>
              <p className="card-text">{products[0].descripcion}</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
              <a href="#" className="btn btn-primary" id="btn-star"><FaStar/></a>
            </div>
          </div>
          <div className="card" alt = "prueba">
            <img className="card-img-top" src={products[0].img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{products[0].nombre}</h5>
              <h5 className="card-title">{"$"+ products[0].precio}</h5>
              <p className="card-text">{products[0].descripcion}</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
              <a href="#" className="btn btn-primary" id="btn-star"><FaStar/></a>
            </div>
          </div>
          <div className="card" alt = "prueba">
            <img className="card-img-top" src={products[0].img} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{products[0].nombre}</h5>
              <h5 className="card-title">{"$"+ products[0].precio}</h5>
              <p className="card-text">{products[0].descripcion}</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
              <a href="#" className="btn btn-primary" id="btn-star"><FaStar/></a>
            </div>
          </div>
          
        </div>      
      </div>
    </>
  );
}
