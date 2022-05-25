import {React, useState, useEffect} from "react";
import '../styles/Catalogo.scss'
import { FaCartPlus} from 'react-icons/fa';
import CHeader from './CHeader';
import Card from './ProductCard';
import { getData } from '../firebase';

// import prod1 from "../imgs/prod_1.png"
// import prod2 from "../imgs/prod_2.png"
// import prod3 from "../imgs/prod_3.png"
// import prod4 from "../imgs/prod_4.png"

export default function Catalogo() {
  // const [products, setProducts] = useState([
  //   { id:"0" , nombre: 'Samsung S5', precio: 300, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'tecnologia'},
  //   { id:"1" , nombre: 'Samsung S4', precio: 250, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod2, categoria:'Phones'},
  //   { id:"2" , nombre: 'iPhone SE', precio: 400, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod3, categoria:'Phones'},
  //   { id:"3" , nombre: 'iPhone 12', precio: 1000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod4, categoria:'tecnologia'},
  //   { id:"4" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'Phones'},
  //   { id:"5" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'Phones'},
  //   { id:"6" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'tecnologia'},
  //   { id:"7" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'tecnologia'},
  //   { id:"8" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'tecnologia'},
  // ]);
  const [products, setProducts] = useState([]);
  const [listCategories, updateCategories] = useState([]);

  useEffect(()=>{
    getData().then(res => {
      setProducts(res);
      updateDisplayProducts(res);
      let categories = []
      for (let i = 0; i < res.length; i += 1) {
        if (!categories.includes(res[i].categoria)){
          categories.push(res[i].categoria)
        }
      }
      categories.unshift("All")
      updateCategories(categories)
    })
  }, [])

  const [displayProducts, updateDisplayProducts] = useState([...products]);
  const [search,setSearch] = useState('');

  const inputRange = document.querySelectorAll(".input-range input");
  const range = document.querySelector(".slider-filter");
  const priceInput = document.querySelectorAll(".input-precio input");
  const priceGap = 1000;

  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(8000);

  inputRange.forEach(input =>{
    input.addEventListener("input", e =>{
      let minVal = parseInt(inputRange[0].value),
      maxVal = parseInt(inputRange[1].value)

      if((maxVal - minVal) < priceGap){
          if(e.target.className === "range-min"){
            inputRange[0].value = maxVal - priceGap
          }else{
            inputRange[1].value = minVal + priceGap;
          }
      }else{
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = ((minVal / inputRange[0].max) * 100) + "%";
          range.style.right = 100 - ((maxVal / inputRange[1].max) * 100) + "%";
      }
    });
  });

  priceInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);
          
          if((maxPrice - minPrice >= priceGap) && maxPrice <= inputRange[1].max){
              if(e.target.className === "min"){
                inputRange[0].value = minPrice;
                  range.style.left = ((minPrice / inputRange[0].max) * 100) + "%";
              }else{
                inputRange[1].value = maxPrice;
                  range.style.right = 100 - (maxPrice / inputRange[1].max) * 100 + "%";
              }
          }
      });
  });

 function setCategories(){
   const item = [];
   for (let i=0; i<listCategories.length; i++){
    item.push(
      <li>
        <a className="dropdown-item" href="#f" onClick={ 
          function() {
             if (listCategories[i]==="All"){
               let category = products;
               updateDisplayProducts([...category]);
             }else{
               let category = products.filter(products => products.categoria === listCategories[i])
               updateDisplayProducts([...category])
               console.log("categorias",category)
               console.log("showing",displayProducts)
             }
            }
          }>{listCategories[i]}</a>
      </li>
    );
   }
   return item;
 }

  function setCards() {
    const row = [];
    for (let i = 0; i < displayProducts.length; i += 1) {
      const id = displayProducts[i].id;
      const titulo = displayProducts[i].nombre;
      const precio = displayProducts[i].precio;
      const img = displayProducts[i].imagen;
      const descripcion = displayProducts[i].descripcion;
      const cantidad = displayProducts[i].cantidad;
      row.push(
        
        <Card id={id} imgSrc={img} titulo={titulo} precio={precio} descripcion={descripcion} cantidad={cantidad}/>
      );
    }
    console.log("seting cards", row);
    return row;
  }


  function setCardsBySearch(){
    const row = [];
    displayProducts.map((item) => {
      if (search !== '' && item.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        row.push(<Card id={item.id} imgSrc={item.imagen} titulo={item.nombre} precio={item.precio} descripcion={item.descripcion} cantidad={item.cantidad}/>)
      }
      else if (search === '') row.push(<Card id={item.id} imgSrc={item.img} titulo={item.nombre} precio={item.precio} descripcion={item.descripcion}/>)
    })
    return row;
  }

  const searchFilterFunction = (text) => {
    setSearch(text);
  }

  const filterMinPrice = (value) => {
    value = parseInt(value)
    setMinimo(value);
  }

  const filterMaxPrice = (value) => {
    value = parseInt(value)
    setMaximo(value);
  }

  const setCardsBySlider = () =>{
    let cards = []
    displayProducts.map((item) => {
      if (item.precio >= minimo && item.precio <= maximo) {
        cards.push(<Card id={item.id} imgSrc={item.imagen} titulo={item.nombre} precio={item.precio} descripcion={item.descripcion} cantidad={item.cantidad}/>)
      }
    })
    return cards
  }

  function printfunction (){
    if (search !== ''){
      return setCardsBySearch()
    }else if (minimo !== 0 || maximo !== 8000) {
      return setCardsBySlider()
    }else {
      return setCards()
    }
  }
  
  return (
    <>
    <CHeader/>
    <div className="catalogo-page">
      <div className="spacer_top">
      </div>

      <div id="gridded_div">
        <div className="class_left">
          <div className="wrapper">
            <header>
            <h2>Filtrar por precio</h2>
            </header>
            <div className="input-precio">
              <div className="field">
                <span>Min</span>
                <input type="number" onChange={(value) => filterMinPrice(value.target.value)} className="min" defaultValue="0" />
              </div>
              <div className="separator">-</div>
              <div className="field max">
                <span>Max</span>
                <input type="number" onChange={(value) => filterMaxPrice(value.target.value)} className="max" defaultValue="8000" />
              </div>
            </div>
            <div className="slider">
              <div className="slider-filter"></div>
            </div>
            <div className="input-range">
              <input type="range" onChange={(value) => filterMinPrice(value.target.value)} className="range-min" min="0" max="8000" defaultValue="0" step="100"/>
              <input type="range" onChange={(value) => filterMaxPrice(value.target.value)} className="range-max" min="0" max="8000" defaultValue="8000" step="100"/>
            </div>
          </div>
        </div>
        <div className="class_center">
          <input className="search_bar" 
          type="text" 
          placeholder="Search here ..." 
          onChange={(text) => searchFilterFunction(text.target.value)}/>
          
        </div>
        <div className="class_right">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {setCategories()}
            </ul>
          </div>
        </div>
      </div>

        <div id="features">
          <div className="card card-wide card-featured">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Peraphone S2</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#ref" className="btn btn-primary"><FaCartPlus/></a>
            </div>
          </div>
        </div>
          
        <div className="catalogo">
        {printfunction()}
        </div>      
      </div>
    </>
  );
}
